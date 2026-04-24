// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://osbord.com',
  output: 'server',
  trailingSlash: 'always',
  adapter: cloudflare({
    mode: 'advanced', // Modo avanzado para generar _worker.js
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
});