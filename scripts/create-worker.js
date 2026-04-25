#!/usr/bin/env node
import { writeFileSync } from 'fs';
import { join } from 'path';

// Cloudflare Pages SSR requires _worker.js in the dist/ root
// This wraps the server entry point

const workerCode = `import * as server from './server/entry.mjs';
export default server.default;
`;

writeFileSync(join('dist', '_worker.js'), workerCode);
console.log('✅ Created dist/_worker.js for Cloudflare Pages SSR');
