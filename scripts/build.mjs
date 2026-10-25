import { build } from 'esbuild';
import { readFile } from 'node:fs/promises';
const controlsLicense = await readFile(new URL('../src/vendor/THREE-LICENSE.txt', import.meta.url), 'utf8');
const worker = await build({entryPoints:['src/output-worker.js'],bundle:true,format:'iife',target:['chrome102'],charset:'utf8',legalComments:'none',write:false});

await build({
  entryPoints: ['src/index.js'], outfile: 'dist/simple_ragdoll.js',
  bundle: true, format: 'iife', target: ['chrome102'], charset: 'utf8',
  legalComments: 'none', banner: {js: '// Simple Ragdoll 0.1.0'}, footer: {js: '/* Three.js TransformControls\n' + controlsLicense + '*/'},
  define:{RAGDOLL_OUTPUT_WORKER:JSON.stringify(worker.outputFiles[0].text)}
});
