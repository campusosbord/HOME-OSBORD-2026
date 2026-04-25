// Cloudflare Pages Worker Entry Point
// SSR Handler for Astro - placed in public/ to be copied to dist/

import * as server from './server/entry.mjs';
export default server.default;
