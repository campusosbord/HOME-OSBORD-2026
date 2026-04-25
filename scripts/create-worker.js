#!/usr/bin/env node
import { writeFileSync, cpSync, rmSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

// Cloudflare Pages expects:
// - Static assets at dist/ root (not dist/client/)
// - _worker.js at dist/ root

console.log('🔄 Restructuring build for Cloudflare Pages...');

// Move client assets from dist/client/ to dist/
if (existsSync('dist/client')) {
  const clientFiles = readdirSync('dist/client');
  for (const file of clientFiles) {
    cpSync(join('dist/client', file), join('dist', file), { recursive: true });
  }
  rmSync('dist/client', { recursive: true });
  console.log('✅ Moved client assets to dist/');
}

// Create _worker.js at dist/ root
const workerCode = `import * as server from './server/entry.mjs';
export default server.default;
`;

writeFileSync(join('dist', '_worker.js'), workerCode);
console.log('✅ Created dist/_worker.js');
console.log('✅ Build ready for Cloudflare Pages!');
