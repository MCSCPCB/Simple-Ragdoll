import { readFile, writeFile } from 'node:fs/promises';
import JSZip from 'jszip';
import { importPack, parseJson } from '../src/resources.js';
import { generatePack } from '../src/export.js';
import { entityRows } from '../src/config.js';

const resources = await importPack(await readFile('examples/villager.mcpack'), JSZip);
const config = parseJson(await readFile('src/presets/villager.json', 'utf8'), 'src/presets/villager.json');
delete config.$schema;
await writeFile('examples/villager.physics.json', JSON.stringify(config, null, 2) + '\n');
const rows = entityRows(resources);
if (!rows.find(row => row.id === 'minecraft:villager_v2')?.selected) throw new Error('Villager preset did not match.');
const output = await generatePack(resources, rows, {name: 'Villager Ragdoll'}, JSZip);
await writeFile('examples/villager_ragdoll.mcpack', output.data);
console.log(JSON.stringify(output.reports));
