# Simple Ragdoll

为 Minecraft 基岩版实体添加布娃娃物理的 Blockbench 插件

Simple Ragdoll 由两部分组成：

- **Blockbench 插件**：在实体模型上配置碰撞盒与关节，导出带布娃娃模拟的资源包
- **`Ragdoll` 脚本库**：在行为包中控制布娃娃的状态、运动与环境

## 导入

将 `simple_ragdoll/BP/scripts/ragdoll.js` 复制到行为包脚本目录

```js
import { Ragdoll } from "./ragdoll.js";
```

## 快速开始

```js
const ragdoll = new Ragdoll(entity);

ragdoll.batch(r => {
  r.setState("active");
  r.setVelocity({ x: 3, y: 2, z: 0 });
});
```

## `Ragdoll`

控制一个使用 Simple Ragdoll 资源包的实体

### 构造函数

#### `new Ragdoll(entity)`

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `entity` | `Entity` | 使用 Simple Ragdoll 资源包的实体 |

- 同一实体多次构造返回同一个实例
- 构造时不改变模拟状态

### 属性

| 属性 | 类型 | 访问 | 说明 |
| --- | --- | --- | --- |
| `entity` | `Entity` | 只读 | 受控实体 |
| `isValid` | `boolean` | 只读 | 实体有效且未调用 `dispose()` |

### 方法

#### `setState(state)`

设置模拟状态

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `state` | [`RagdollState`](#ragdollstate) | 目标状态 |

- `active`、`inactive`、`paused` 持续生效，直到调用 `setState("auto")`
- `inactive` 会清除尚未执行的运动指令

```js
ragdoll.setState("active");
```

#### `setTransform(transform, options)`

设置整体或单个部件的位置、朝向

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `transform.position` | `Vector3` | 质心的世界坐标 |
| `transform.rotation` | `Quaternion` | 世界坐标系下的绝对朝向 |
| `options.part` | `string` | 部件名称。省略时作用于整体 |

- `position` 与 `rotation` 至少提供一项
- 作用于整体时，各部件的相对布局不变：
  - `position` 为按当前质量计算的整体质心
  - `rotation` 以物理配置中第一个没有物理父部件的部件为基准，所有部件绕整体质心旋转
- 作用于部件时只移动该部件，启用的关节会在后续求解中继续约束它
- 不修改现有速度

```js
ragdoll.setTransform({ position: { x: 0, y: 80, z: 0 } });
```

#### `setVelocity(velocity, options)`

设置整体或单个部件的线速度、角速度

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `velocity` | `Vector3` | 线速度，单位为格/秒 |
| `options.angularVelocity` | `Vector3` | 角速度，单位为弧度/秒 |
| `options.part` | `string` | 部件名称。省略时作用于整体 |

- `velocity` 与 `angularVelocity` 至少提供一项。只设置角速度时 `velocity` 传 `undefined`
- 作用于整体时：
  - 只设线速度：整体平移速度改为指定值，各部件相对质心的运动不变
  - 只设角速度：质心速度不变，按角速度变化补上各部件的线速度差
  - 两者都设：各部件获得整体平移速度与绕质心旋转所需的线速度
- 作用于部件且只设角速度时，该部件线速度不变

```js
ragdoll.setVelocity({ x: 3, y: 2, z: 0 });
ragdoll.setVelocity(undefined, { angularVelocity: { x: 0, y: 6, z: 0 }, part: "head" });
```

#### `applyImpulse(impulse, options)`

对整体或单个部件施加一次冲量

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `impulse` | `Vector3` | 冲量，单位为质量单位·格/秒 |
| `options.point` | `Vector3` | 施力点的世界坐标。默认值：目标质心 |
| `options.angularImpulse` | `Vector3` | 角冲量，单位为质量单位·格²/秒 |
| `options.part` | `string` | 部件名称。省略时作用于整体 |

- `impulse` 与 `angularImpulse` 至少提供一项
- 作用于整体时，冲量按质量分配，偏离质心的部分按整体转动惯量产生旋转
- 作用于部件时，按该部件的质量与转动惯量计算
- `point` 产生的旋转与 `angularImpulse` 叠加

```js
ragdoll.applyImpulse({ x: 1200, y: 480, z: 0 });
```

#### `setForce(force, options)`

设置整体或单个部件的持续力、力矩

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `force` | `Vector3` | 力，单位为质量单位·格/秒² |
| `options.point` | `Vector3` | 施力点的世界坐标。默认值：目标质心 |
| `options.torque` | `Vector3` | 力矩，单位为质量单位·格²/秒² |
| `options.part` | `string` | 部件名称。省略时作用于整体 |

- `force` 与 `torque` 至少提供一项
- 替换同一目标已有的力和力矩；整体与部件的力相互叠加
- 力与力矩均为零时清除该目标
- 最多 16 个目标
- `point` 与方向固定在世界坐标系中，不随部件转动
- 每个物理步积分，受暂停和 `timeScale` 影响

```js
ragdoll.setForce({ x: 0, y: 200, z: 0 }, { part: "head" });
ragdoll.setForce({ x: 0, y: 0, z: 0 }, { part: "head" }); // 清除
```

#### `setProperties(properties, options)`

覆盖整体或单个部件的物理属性

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `properties` | `Partial<`[`BodyProperties`](#bodyproperties)`>` | 要覆盖的属性 |
| `options.part` | `string` | 部件名称。省略时作用于整体 |

- 只修改传入的字段；字段传 `null` 移除覆盖，恢复导出配置
- 部件设置优先于整体设置
- 最多 33 个目标（整体算一个）
- 不改变已有速度

```js
ragdoll.setProperties({ mass: 20, friction: 0.2 });
ragdoll.setProperties({ mass: null });
```

#### `setJointsEnabled(enabled, joint)`

启用或解除全部关节、单个关节

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `enabled` | `boolean` | 是否启用 |
| `joint` | `string` | 物理配置 `joints` 中的键名，区分大小写。省略时作用于全部关节 |

- 省略 `joint` 时会清除所有单个关节的设置
- 单个关节设置优先于全部关节设置，最多 64 个
- 解除关节不改变碰撞配对，重新启用时恢复原有约束
- 不存在的关节名称不产生效果

```js
ragdoll.setJointsEnabled(false, "neck");
```

#### `setSimulationOptions(options)`

修改当前实体的模拟设置

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `options.gravity` | `number \| Vector3 \| null` | 数值为向下的加速度，向量为世界坐标系加速度，大小不超过 100 格/秒²。`null` 恢复导出设置 |
| `options.timeScale` | `number` | 时间倍率，范围 `0…2`，`0` 停止推进。默认值：`1` |
| `options.iterations` | `number \| null` | 求解迭代次数，`1…12` 的整数，不超过导出设置。`null` 恢复导出设置 |
| `options.selfCollisions` | `boolean` | 是否启用部件间碰撞。默认值：`true` |
| `options.friction` | `boolean` | 是否启用接触摩擦。默认值：`true` |
| `options.joints` | `boolean` | 等同于 `setJointsEnabled(value)`。默认值：`true` |

- 只修改传入的字段
- 不能重新启用导出时已移除的碰撞配对或摩擦计算
- `timeScale` 不改变物理步长，每帧最多执行 3 个物理步

```js
ragdoll.setSimulationOptions({ gravity: { x: 0, y: 4, z: 0 }, timeScale: 0.5 });
```

#### `setTerrain(boxes, bounds)`

替换固体地形，不影响液体区域

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `boxes` | [`TerrainBox`](#terrainbox)`[] \| null` | 完整的固体碰撞盒列表，最多 64 个。`[]` 表示无地形，`null` 恢复资源包内置的方块查询 |
| `bounds` | `{ min: Vector3, max: Vector3 }` | 可选。脚本地形的覆盖范围，范围外仍使用内置方块查询。坐标须为整数且包含所有 `boxes`，省略时覆盖全部位置 |

- 覆盖范围内不再查询世界方块，方块变化时需要重新提交

```js
ragdoll.setTerrain([{ min: { x: -8, y: 63, z: -8 }, max: { x: 8, y: 64, z: 8 } }]);
```

#### `setEnvironment(environment)`

替换固体地形和液体区域

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `environment` | [`Environment`](#environment)` \| null` | 完整环境。`null` 恢复内置方块查询并清除液体 |

```js
ragdoll.setEnvironment({
  origin: { x: 100, y: 60, z: 100 },
  regions: [
    { type: "solid", min: { x: 0, y: 0, z: 0 }, max: { x: 8, y: 1, z: 8 } },
    { type: "liquid", min: { x: 0, y: 1, z: 0 }, max: { x: 8, y: 3, z: 8 } }
  ]
});
```

#### `batch(callback)`

将回调中的所有修改合并为一次提交

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `callback` | `(ragdoll: Ragdoll) => void` | 同步回调 |

- 回调抛出异常或提交失败时，撤销本次所有修改
- 不支持异步回调、嵌套 `batch()`，或在回调中调用 `dispose()`

```js
ragdoll.batch(r => {
  r.setEnvironment({ regions });
  r.setProperties({ mass: 20 });
  r.setState("active");
  r.setVelocity({ x: 0, y: 2, z: 6 });
});
```

#### `dispose()`

清除所有设置和未执行的指令，恢复 `auto` 状态并释放实例

- 可以重复调用
- 释放后再次 `new Ragdoll(entity)` 得到新实例

```js
ragdoll.dispose();
```

### 备注

- 坐标、方向、速度均使用世界坐标系，长度单位为格；质量单位与物理配置一致
- 部件名称为物理配置 `bodies` 中的键名，区分大小写。不存在的名称不产生效果
- 修改运动、属性、关节或环境会唤醒休眠的布娃娃，但不会解除 `paused`
- 除运动指令外，所有设置一直保留，直到再次修改或调用 `dispose()`

#### 运动指令

`setTransform()`、`setVelocity()`、`applyImpulse()` 为运动指令：

- 按调用顺序各执行一次
- 任意 5 秒内最多调用 32 次
- 尚未进入布娃娃时先暂存，进入模拟并完成姿态初始化后执行

#### 客户端模拟

- 模拟在各客户端本地运行，脚本无法读取实际姿态、速度或休眠状态
- 不移动实体本身
- 客户端重新加载实体后重新开始本地模拟，各客户端的结果不保证一致

#### 异常

以下情况抛出异常，且本次修改不生效：

- 参数类型错误或数值超出范围
- 超出数量上限
- 实例已失效（`isValid` 为 `false`）
- 单次提交的数据超过 64000 字符

## 类型

### `RagdollState`

```ts
type RagdollState = "auto" | "active" | "inactive" | "paused";
```

| 值 | 说明 |
| --- | --- |
| `auto` | 默认值。按物理配置的 `trigger`、`release` 条件自动进入和恢复 |
| `active` | 进入或保持布娃娃，忽略 `release` |
| `inactive` | 恢复原有动画，忽略 `trigger` |
| `paused` | 冻结当前姿态。尚未进入时，以当前动画姿态建立布娃娃后冻结 |

### `BodyProperties`

| 属性 | 类型 | 范围 | 说明 |
| --- | --- | --- | --- |
| `mass` | `number \| null` | `0.000001…1000000000000` | 整体总质量或部件质量 |
| `friction` | `number \| null` | `0…10` | 摩擦系数 |
| `restitution` | `number \| null` | `0…1` | 恢复系数 |
| `linearDamping` | `number \| null` | `0…0.999999` | 线性阻尼，每秒衰减比例 |
| `angularDamping` | `number \| null` | `0…0.999999` | 角阻尼，每秒衰减比例 |

整体总质量按原始比例分配到各部件，转动惯量同步调整

### `TerrainBox`

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `min` | `Vector3` | 必填。最小世界坐标 |
| `max` | `Vector3` | 必填。最大世界坐标，各分量必须大于 `min` |
| `friction` | `number` | 摩擦系数，范围 `0…10`。默认值：导出设置 |
| `restitution` | `number` | 恢复系数，范围 `0…1`。默认值：导出设置 |

- 与世界坐标轴对齐
- 接触时摩擦取双方系数乘积的平方根，恢复系数取双方较大值

### `Environment`

```ts
type Environment = {
  origin?: Vector3;
  bounds?: { min: Vector3; max: Vector3 };
  regions: (SolidRegion | LiquidRegion)[];
};
```

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `origin` | `Vector3` | 区域坐标原点。默认值：`{ x: 0, y: 0, z: 0 }` |
| `bounds` | `{ min: Vector3, max: Vector3 }` | 可选。固体地形的覆盖范围，相对于 `origin`，规则同 [`setTerrain()`](#setterrainboxes-bounds) 的 `bounds` |
| `regions` | `(SolidRegion \| LiquidRegion)[]` | 必填。完整区域列表，最多 64 个固体、16 个液体。`[]` 清除全部固体与液体 |

#### `SolidRegion`

属性同 [`TerrainBox`](#terrainbox)，另可设置 `type: "solid"`。`min`、`max` 相对于 `origin`

#### `LiquidRegion`

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `type` | `"liquid"` | 必填 |
| `min` | `Vector3` | 必填。相对 `origin` 的最小坐标 |
| `max` | `Vector3` | 必填。相对 `origin` 的最大坐标，各分量必须大于 `min` |
| `density` | `number` | 密度，单位为质量单位/格³，范围 `0…1000000`。默认值：`1000` |
| `drag` | `number` | 线速度阻力系数，单位为秒⁻¹，范围 `0…100`。默认值：`2` |
| `angularDrag` | `number` | 角速度阻力系数，单位为秒⁻¹，范围 `0…100`。默认值：`2` |

- 液体只来自脚本提交，内置方块查询不生成液体
- 每个碰撞盒用 8 个采样点估算浸没体积；浮力 = 密度 × 浸没体积 × 重力，偏心浮力产生力矩
- 浸没时速度每秒保留 `exp(-系数 × 浸没比例)`
- 区域重叠时，每个采样点只取列表中第一个匹配的区域
- 体积按碰撞盒累加，碰撞盒重叠部分会重复计算

### `Vector3`

```ts
type Vector3 = { x: number; y: number; z: number };
```

各分量为有限数值，范围 `-1000000…1000000`

### `Quaternion`

```ts
type Quaternion = { x: number; y: number; z: number; w: number };
```

- 单位朝向为 `{ x: 0, y: 0, z: 0, w: 1 }`
- 自动归一化，不能为零长度

## Molang 输出

资源包中的 Molang 可以读取模拟结果，行为包脚本无法读取

在物理配置中启用输出组：

```json
{
  "outputs": ["state", "bodies", "contacts", "liquids"]
}
```

- 默认不启用任何输出组
- 导入的资源包已经引用某组变量时，自动启用该组
- 只引用某个部件的变量时，只生成该部件的结果

表中 `x/y/z` 表示三个独立变量，`N` 为编号

### `state`

| 变量 | 说明 |
| --- | --- |
| `v.ragdoll_out_active` | 是否处于布娃娃状态 |
| `v.ragdoll_out_paused` | 是否处于 `paused` 或 `timeScale` 为 `0` |
| `v.ragdoll_out_sleeping` | 是否休眠 |
| `v.ragdoll_out_time` | 本次模拟已推进的秒数，暂停时不增加 |
| `v.ragdoll_out_body_count` | 部件数量 |
| `v.ragdoll_out_center_x/y/z` | 整体质心世界坐标 |
| `v.ragdoll_out_min_x/y/z` | 包围盒最小世界坐标 |
| `v.ragdoll_out_max_x/y/z` | 包围盒最大世界坐标 |

### `bodies`

`N` 为部件在物理配置 `bodies` 中的顺序，从 `0` 开始

| 变量 | 说明 |
| --- | --- |
| `v.ragdoll_out_body_N_position_x/y/z` | 质心世界坐标 |
| `v.ragdoll_out_body_N_rotation_x/y/z/w` | 世界朝向四元数 |
| `v.ragdoll_out_body_N_velocity_x/y/z` | 线速度，单位为格/秒 |
| `v.ragdoll_out_body_N_angular_velocity_x/y/z` | 角速度，单位为弧度/秒 |

- `state` 与 `bodies` 每帧模拟结束后更新，为物理状态而非显示插值
- 退出布娃娃后保留最后一次结果

### `contacts`

| 变量 | 说明 |
| --- | --- |
| `v.ragdoll_out_contact_seq` | 产生接触时递增的序号 |
| `v.ragdoll_out_contact_count` | 最近一次求解的接触数量 |
| `v.ragdoll_out_contact_capacity` | 接触容量，同物理配置 |
| `v.ragdoll_out_contact_overflow` | 接触数量是否超过容量 |
| `v.ragdoll_out_contact_N_body_a` | 部件 A 编号，地形为 `-1` |
| `v.ragdoll_out_contact_N_body_b` | 部件 B 编号，地形为 `-1` |
| `v.ragdoll_out_contact_N_position_x/y/z` | 接触点世界坐标 |
| `v.ragdoll_out_contact_N_normal_x/y/z` | 由 A 指向 B 的法线 |
| `v.ragdoll_out_contact_N_impulse` | 法向冲量，单位为质量单位·格/秒 |

- `N` 的范围为 `0…contact_count - 1`，同一接触在不同物理步中的编号可能不同
- 在接触求解后、位置积分前记录；一帧执行多个物理步时，保留最后一步的结果
- 休眠期间保留上次结果；退出布娃娃后 `contact_count` 为 `0`
- 超出容量的接触不记录

### `liquids`

| 变量 | 说明 |
| --- | --- |
| `v.ragdoll_out_liquid_seq` | 任意部件进出液体时递增的序号 |
| `v.ragdoll_out_liquid_body` | 最近一次进出液体的部件编号 |
| `v.ragdoll_out_liquid_entered` | 最近一次是否为进入 |
| `v.ragdoll_out_body_N_submerged` | 部件浸没比例，范围 `0…1` |
| `v.ragdoll_out_body_N_liquid_region` | 所在液体区域编号，不在液体中为 `-1` |
| `v.ragdoll_out_body_N_liquid_seq` | 该部件进出液体时递增的序号 |
| `v.ragdoll_out_body_N_liquid_entered` | 该部件最近一次是否为进入 |

- 液体区域编号只计 `regions` 中的液体，从 `0` 开始
- 浸没比例从 `0` 变为正数为进入，从正数变为 `0` 为离开
- 暂停或非布娃娃状态下不产生进出事件
- 同一物理步多个部件进出时，整体变量记录最后一个
- 所有 `seq` 从 `0` 开始，达到 `16777214` 后回到 `1`

## 示例

村民布娃娃 Add-on
`examples/villager_ragdoll.mcaddon`

| 行为 | 实现 |
| --- | --- |
| 村民濒死倒地 | 生命值将降至 1 及以下时保持为 1 并进入布娃娃，沿受击方向施加初始冲量 |
| 地形与液体 | 采样周围水平 6 格、上下各 4 格的方块，合并为固体、水、岩浆区域后调用 `setEnvironment()` |
| 地形更新 | 范围内有玩家挖掘、放置或爆炸时重新采样 |
| 死亡 | 濒死 15 秒后死亡，期间不再受伤 |
