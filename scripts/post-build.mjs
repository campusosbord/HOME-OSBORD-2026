#!/usr/bin/env node
import { writeFileSync, cpSync, existsSync, readdirSync, rmSync } from 'fs';
import { join } from 'path';

console.log('🔄 Preparing build for Cloudflare Pages...');

// Move client assets to dist/ root
if (existsSync('dist/client')) {
  const files = readdirSync('dist/client');
  for (const file of files) {
    cpSync(join('dist/client', file), join('dist', file), { recursive: true });
  }
  rmSync('dist/client', { recursive: true });
  console.log('✅ Moved client assets to dist/');
}

// Create _worker.js at dist/ root
const workerCode = `globalThis.process ??= {};
globalThis.process.env ??= {};
import "cloudflare:workers";
import { w } from "./server/chunks/worker-entry_BF0Jm1Oh.mjs";
export { w as default };
`;

writeFileSync('dist/_worker.js', workerCode);
console.log('✅ Created dist/_worker.js');
console.log('✅ Build ready for Cloudflare Pages!');
