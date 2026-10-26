import { PassengerOfBlockEmoteType, system, world } from "@minecraft/server";
import { Ragdoll, MAX_TERRAIN_BOXES, MAX_LIQUIDS } from "./ragdoll.js";

const VILLAGERS = ["minecraft:villager", "minecraft:villager_v2"];
const TERRAIN_RADIUS = 6;
const WATER = { type: "liquid", density: 1000, drag: 2, angularDrag: 2 };
const LAVA = { type: "liquid", density: 3000, drag: 8, angularDrag: 8 };
const controllers = new Map();
const MOVEMENT_LOCK = "simple_ragdoll:movement_lock";
const lockedVillagers = new Set();
let movementRun;

function isVillager(entity) {
  return entity.isValid && VILLAGERS.includes(entity.typeId);
}

function getController(entity) {
  let state = controllers.get(entity.id);
  if (!state) {
    state = { entity, ragdoll: new Ragdoll(entity), active: false, terrainUpdate: undefined };
    controllers.set(entity.id, state);
  }
  return state;
}

// 初始冲量

function enterRagdoll(state, impulse) {
  const { entity, ragdoll } = state;
  state.dimension = entity.dimension;
  state.bounds = terrainBounds(entity.location, state.dimension.heightRange);
  const environment = captureTerrain(state.dimension, state.bounds);

  ragdoll.batch(r => {
    r.setEnvironment(environment);
    r.setState("active");
    if (impulse) r.applyImpulse(impulse);
  });
  state.active = true;
  lockMovement(state);
}

function lockMovement(state) {
  const { entity } = state;
  releaseMovement(entity);
  state.motion = { position: entity.location, velocityY: 0 };
  entity.setDynamicProperty(MOVEMENT_LOCK, true);
  lockedVillagers.add(state);
  updateMovement(state);
  if (movementRun === undefined) movementRun = system.runInterval(() => {
    for (const state of lockedVillagers) {
      if (!state.entity.isValid) {
        releaseMovement(state.entity, state);
        continue;
      }
      syncHealth(state.entity);
      if (state.active) updateMovement(state);
    }
  }, 1);
}

function updateMovement({ entity, motion }) {
  if (motion.support) {
    let block;
    try { block = entity.dimension.getBlock(motion.support.location); }
    catch { return; }
    if (!block) return;
    if (entity.isPassengerOfBlock && block.permutation.matches(motion.support.typeId, motion.support.states)) return;
    if (entity.isPassengerOfBlock) entity.stopPassengerOfBlock();
    motion.support = undefined;
  }

  const position = entity.location, velocity = entity.getVelocity();
  const nextVelocityY = (motion.velocityY - 0.08) * 0.98;
  const target = {
    x: motion.position.x,
    y: Math.max(motion.position.y + motion.velocityY - 0.08, Math.min(motion.position.y, position.y)),
    z: motion.position.z,
  };
  const velocityY = Math.max(nextVelocityY, Math.min(0, velocity.y));
  if (position.x !== target.x || position.y !== target.y || position.z !== target.z) {
    entity.teleport(target, { keepVelocity: true });
  }
  if (velocity.x !== 0 || velocity.z !== 0 || velocity.y !== velocityY) {
    entity.clearVelocity();
    if (velocityY !== 0) entity.applyImpulse({ x: 0, y: velocityY, z: 0 });
  }
  motion.position = target;
  motion.velocityY = velocityY;

  let support;
  try { support = entity.getBlockStandingOn({ ignoreThinBlocks: false }); }
  catch { return; }
  if (!support) return;
  const blockPosition = support.location;
  const offset = { x: target.x - blockPosition.x, y: target.y - blockPosition.y, z: target.z - blockPosition.z };
  entity.clearVelocity();
  entity.startPassengerOfBlock(blockPosition, offset, entity.getRotation().y, 180, PassengerOfBlockEmoteType.Standing);
  motion.velocityY = 0;
  motion.support = { location: blockPosition, typeId: support.typeId, states: support.permutation.getAllStates() };
}

function releaseMovement(entity, state) {
  if (state) {
    lockedVillagers.delete(state);
    state.motion = undefined;
  }
  if (entity.isValid && entity.getDynamicProperty(MOVEMENT_LOCK)) {
    if (entity.isPassengerOfBlock) entity.stopPassengerOfBlock();
    entity.setDynamicProperty(MOVEMENT_LOCK, undefined);
  }
  if (!lockedVillagers.size && movementRun !== undefined) {
    system.clearRun(movementRun);
    movementRun = undefined;
  }
}

function hitDirection(entity, source) {
  let direction;
  const projectile = source.damagingProjectile, attacker = source.damagingEntity;
  if (projectile?.isValid) direction = projectile.getVelocity();
  if ((!direction || Math.hypot(direction.x, direction.z) < 0.001) && attacker?.isValid) {
    const from = attacker.location, to = entity.location;
    direction = { x: to.x - from.x, z: to.z - from.z };
  }
  direction ??= entity.getVelocity();
  const length = Math.hypot(direction.x, direction.z);
  return length > 0.001 ? { x: direction.x / length, z: direction.z / length } : { x: 0, z: 0 };
}

world.afterEvents.entityHurt.subscribe(({ hurtEntity: entity, damageSource, damage }) => {
  if (!isVillager(entity)) return;
  const direction = hitDirection(entity, damageSource);
  const strength = damage > 0 ? Math.min(5000, 1200 + damage * 400) : 0;
  syncHealth(entity, { x: direction.x * strength, y: strength * 0.4, z: direction.z * strength });
});

// 真实地形数据

function terrainBounds(position, range) {
  const x = Math.floor(position.x), y = Math.floor(position.y), z = Math.floor(position.z);
  return {
    min: { x: x - TERRAIN_RADIUS, y: Math.max(range.min, y - 4), z: z - TERRAIN_RADIUS },
    max: { x: x + TERRAIN_RADIUS + 1, y: Math.min(range.max, y + 5), z: z + TERRAIN_RADIUS + 1 },
  };
}

function captureTerrain(dimension, { min, max }) {
  const width = max.x - min.x, height = max.y - min.y, depth = max.z - min.z;
  const cells = new Uint8Array(width * height * depth);
  const index = (x, y, z) => (y * depth + z) * width + x;
  try {
    for (let y = 0; y < height; y++) for (let z = 0; z < depth; z++) for (let x = 0; x < width; x++) {
      const block = dimension.getBlock({ x: min.x + x, y: min.y + y, z: min.z + z });
      if (!block) return null;
      if (block.isAir) continue;
      let flags = block.isSolid ? 1 : 0;
      if (block.isWaterlogged || block.typeId === "minecraft:water" || block.typeId === "minecraft:flowing_water") flags |= 2;
      else if (block.isLiquid && (block.typeId === "minecraft:lava" || block.typeId === "minecraft:flowing_lava")) flags |= 4;
      cells[index(x, y, z)] = flags;
    }
  } catch { return null; }

  // 各类区域独立合并，含水方块可以同时保留固体和水
  function merge(mask) {
    const boxes = [];
    for (let y = 0; y < height; y++) for (let z = 0; z < depth; z++) for (let x = 0; x < width; x++) {
      if (!(cells[index(x, y, z)] & mask)) continue;
      let endX = x + 1, endY = y + 1, endZ = z + 1;
      while (endX < width && (cells[index(endX, y, z)] & mask)) endX++;
      const rowFull = (yy, zz) => {
        for (let xx = x; xx < endX; xx++) if (!(cells[index(xx, yy, zz)] & mask)) return false;
        return true;
      };
      while (endZ < depth && rowFull(y, endZ)) endZ++;
      const layerFull = yy => {
        for (let zz = z; zz < endZ; zz++) if (!rowFull(yy, zz)) return false;
        return true;
      };
      while (endY < height && layerFull(endY)) endY++;
      for (let yy = y; yy < endY; yy++) for (let zz = z; zz < endZ; zz++) for (let xx = x; xx < endX; xx++) cells[index(xx, yy, zz)] &= ~mask;
      boxes.push({
        min: { x: min.x + x, y: min.y + y, z: min.z + z },
        max: { x: min.x + endX, y: min.y + endY, z: min.z + endZ },
      });
    }
    return boxes;
  }

  const solids = merge(1), water = merge(2), lava = merge(4);
  if (solids.length > MAX_TERRAIN_BOXES || water.length + lava.length > MAX_LIQUIDS) return null;
  return { regions: [
    ...solids.map(box => ({ ...box, type: "solid" })),
    ...water.map(box => ({ ...box, ...WATER })),
    ...lava.map(box => ({ ...box, ...LAVA })),
  ] };
}

function updateTerrain({ dimension, block }) {
  const p = block.location;
  for (const state of controllers.values()) {
    if (!state.active || state.dimension.id !== dimension.id || state.terrainUpdate !== undefined) continue;
    const { min, max } = state.bounds;
    if (p.x < min.x || p.x >= max.x || p.y < min.y || p.y >= max.y || p.z < min.z || p.z >= max.z) continue;
    state.terrainUpdate = system.run(() => {
      state.terrainUpdate = undefined;
      if (state.active && state.ragdoll.isValid) {
        state.ragdoll.setEnvironment(captureTerrain(state.dimension, state.bounds));
      }
    });
  }
}

world.afterEvents.playerBreakBlock.subscribe(updateTerrain);
world.afterEvents.playerPlaceBlock.subscribe(updateTerrain);
world.afterEvents.blockExplode.subscribe(updateTerrain);

// 脱离布娃娃状态

function restoreRagdoll(state) {
  if (state.terrainUpdate !== undefined) {
    system.clearRun(state.terrainUpdate);
    state.terrainUpdate = undefined;
  }
  state.ragdoll.batch(r => {
    r.setState("inactive");
    r.setEnvironment(null);
  });
  state.active = false;
  releaseMovement(state.entity, state);
}

function syncHealth(entity, initialImpulse) {
  if (!isVillager(entity)) return;
  const health = entity.getComponent("minecraft:health");
  if (!health) return;
  const currentHealth = health.currentValue, maxHealth = health.effectiveMax;
  const state = controllers.get(entity.id);
  // q.max_health > 0 && q.health < q.max_health
  if (maxHealth > 0 && currentHealth < maxHealth) {
    if (!state?.active) enterRagdoll(state ?? getController(entity), initialImpulse);
  // q.health >= q.max_health
  } else if (currentHealth >= maxHealth) {
    if (state?.active) restoreRagdoll(state);
    else releaseMovement(entity, state);
  }
}

function queueHealthCheck({ entity }) {
  if (!isVillager(entity)) return;
  // 延后检查，让同次入口受伤事件先提交带受击方向的初始冲量
  system.run(() => syncHealth(entity));
}

world.afterEvents.entityHealthChanged.subscribe(queueHealthCheck);
world.afterEvents.entityLoad.subscribe(queueHealthCheck);
world.afterEvents.entitySpawn.subscribe(queueHealthCheck);
world.afterEvents.worldLoad.subscribe(() => {
  for (const id of ["overworld", "nether", "the_end"]) {
    const dimension = world.getDimension(id);
    for (const type of VILLAGERS) for (const entity of dimension.getEntities({ type })) syncHealth(entity);
  }
});
world.afterEvents.entityRemove.subscribe(({ removedEntityId }) => {
  const state = controllers.get(removedEntityId);
  if (!state) return;
  if (state.terrainUpdate !== undefined) system.clearRun(state.terrainUpdate);
  releaseMovement(state.entity, state);
  state.ragdoll.dispose();
  controllers.delete(removedEntityId);
});
