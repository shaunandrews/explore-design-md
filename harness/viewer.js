import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { parseArgs, rootDir } from './utils.js';

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const relative = decoded === '/' ? 'viewer/index.html' : decoded.replace(/^\/+/, '');
  const resolved = path.resolve(rootDir, relative);

  if (!resolved.startsWith(rootDir)) {
    return null;
  }

  return resolved;
}

async function main() {
  const args = parseArgs();
  const port = Number(args.port || 4173);

  const server = http.createServer((request, response) => {
    const filePath = safePath(request.url || '/');

    if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }

    const ext = path.extname(filePath);
    response.writeHead(200, {
      'Content-Type': contentTypes[ext] || 'application/octet-stream',
    });
    fs.createReadStream(filePath).pipe(response);
  });

  server.listen(port, '127.0.0.1', () => {
    console.log(`Viewer running at http://127.0.0.1:${port}`);
  });
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});

