// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://home-osbord-2026.pages.dev',
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});