import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import JSZip from 'jszip';
import { importPack, parseJson } from '../src/resources.js';
import { generatePack } from '../src/export.js';
import { entityRows } from '../src/config.js';

async function copyFiles(zip, directory, prefix = '') {
  for (const entry of await readdir(directory, {withFileTypes: true})) {
    const path = join(directory, entry.name), name = prefix + entry.name;
    if (entry.isDirectory()) await copyFiles(zip, path, name + '/');
    else if (entry.isFile()) zip.file(name, await readFile(path));
  }
}

const resources = await importPack(await readFile('examples/villager.mcpack'), JSZip);
const config = parseJson(await readFile('src/presets/villager.json', 'utf8'), 'src/presets/villager.json');
delete config.$schema;
config.trigger = 'q.max_health>0&&q.health<=1';
config.release = '0';
await writeFile('examples/villager.physics.json', JSON.stringify(config, null, 2) + '\n');
const rows = entityRows(resources);
for (const row of rows.filter(row => row.selected)) {
  row.config.trigger = config.trigger;
  row.config.release = config.release;
}
if (!rows.find(row => row.id === 'minecraft:villager_v2')?.selected) throw new Error('Villager preset did not match.');
const bpManifest = parseJson(await readFile('simple_ragdoll/BP/manifest.json', 'utf8'), 'simple_ragdoll/BP/manifest.json');
const rpManifest = parseJson(await readFile('simple_ragdoll/RP/manifest.json', 'utf8'), 'simple_ragdoll/RP/manifest.json');
for (const [manifest, dependency] of [[bpManifest, rpManifest], [rpManifest, bpManifest]]) {
  const reference = manifest.dependencies.find(entry => entry.uuid === dependency.header.uuid);
  if (JSON.stringify(reference?.version) !== JSON.stringify(dependency.header.version)) throw new Error('Pack dependency does not match.');
}
const output = await generatePack(resources, rows, {name: rpManifest.header.name, uuid: rpManifest.header.uuid}, JSZip);
const resource = await JSZip.loadAsync(output.data);
await copyFiles(resource, 'simple_ragdoll/RP');
const resourceData = await resource.generateAsync({type:'uint8array',compression:'DEFLATE'});
await writeFile('examples/villager_ragdoll.mcpack', resourceData);
const behavior = new JSZip();
await copyFiles(behavior, 'simple_ragdoll/BP');
const addon = new JSZip();
addon.file('villager_ragdoll.mcpack', resourceData);
addon.file('ragdoll_example.mcpack', await behavior.generateAsync({type:'uint8array',compression:'DEFLATE'}));
await writeFile('examples/villager_ragdoll.mcaddon', await addon.generateAsync({type:'uint8array',compression:'DEFLATE'}));
console.log(JSON.stringify(output.reports));
