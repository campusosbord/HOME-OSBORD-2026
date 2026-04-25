// Cloudflare Pages Function - SSR Handler
export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Import the Astro SSR handler dynamically
  const { default: handler } = await import('../dist/server/entry.mjs');
  
  return handler(context.request, context.env);
}
