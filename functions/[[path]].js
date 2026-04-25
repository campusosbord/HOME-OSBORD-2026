// Cloudflare Pages Function - SSR Handler
// This file runs in Cloudflare Pages edge runtime

export async function onRequest(context) {
  // Dynamically import the Astro SSR handler from the build
  const { default: handler } = await import('../dist/server/entry.mjs');
  return handler(context.request, context.env);
}
