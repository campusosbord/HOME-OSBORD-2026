// Cloudflare Pages Function - SSR Entry Point
// Captures all paths and delegates to Astro SSR handler

// @ts-ignore - Import from build output
import { default as handler } from '../dist/server/entry.mjs';

// Export the handler for Cloudflare Pages
export const onRequest = handler;
