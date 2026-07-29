import {
  cpSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const output = resolve(root, 'dist');
const files = ['index.html', 'styles.css', 'data.js', 'script.js'];
const assetFiles = ['avatar.webp', 'cv.pdf', 'favicon.svg', 'og.jpg'];
const contentTypes = {
  'index.html': 'text/html; charset=utf-8',
  'styles.css': 'text/css; charset=utf-8',
  'data.js': 'text/javascript; charset=utf-8',
  'script.js': 'text/javascript; charset=utf-8',
  'assets/avatar.webp': 'image/webp',
  'assets/cv.pdf': 'application/pdf',
  'assets/favicon.svg': 'image/svg+xml',
  'assets/og.jpg': 'image/jpeg',
};

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of files) {
  cpSync(resolve(root, file), resolve(output, file));
}

mkdirSync(resolve(output, 'assets'), { recursive: true });

for (const file of assetFiles) {
  cpSync(resolve(root, 'assets', file), resolve(output, 'assets', file));
}

mkdirSync(resolve(output, '.openai'), { recursive: true });
cpSync(
  resolve(root, '.openai', 'hosting.json'),
  resolve(output, '.openai', 'hosting.json'),
);

const manifest = Object.fromEntries(
  Object.entries(contentTypes).map(([file, type]) => [
    `/${file}`,
    {
      body: readFileSync(resolve(output, file)).toString('base64'),
      type,
    },
  ]),
);

const worker = `
const files = ${JSON.stringify(manifest)};

function decodeBase64(value) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let pathname = decodeURIComponent(url.pathname);

    if (pathname === '/' || pathname === '/index.html') {
      pathname = '/index.html';
    }

    const file = files[pathname];
    if (!file) {
      return new Response('Not found', { status: 404 });
    }

    const headers = new Headers({
      'Content-Type': file.type,
      'Cache-Control': pathname === '/index.html'
        ? 'public, max-age=0, must-revalidate'
        : 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    });

    if (pathname === '/assets/cv.pdf') {
      headers.set(
        'Content-Disposition',
        'attachment; filename="Kirill_Voiakin_AI_Resume.pdf"',
      );
    }

    const body = request.method === 'HEAD' ? null : decodeBase64(file.body);
    return new Response(body, { status: 200, headers });
  },
};
`;

mkdirSync(resolve(output, 'server'), { recursive: true });
writeFileSync(resolve(output, 'server', 'index.js'), worker.trimStart());

console.log('Portfolio worker built in dist/');
