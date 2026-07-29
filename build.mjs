import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const output = resolve(root, 'dist');
const files = ['index.html', 'styles.css', 'data.js', 'script.js'];
const assetFiles = ['avatar.webp', 'cv.pdf', 'favicon.svg', 'og.jpg'];

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of files) {
  cpSync(resolve(root, file), resolve(output, file));
}

mkdirSync(resolve(output, 'assets'), { recursive: true });

for (const file of assetFiles) {
  cpSync(resolve(root, 'assets', file), resolve(output, 'assets', file));
}

console.log('Static portfolio built in dist/');
