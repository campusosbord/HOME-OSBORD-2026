import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://osbord.com',
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
    platformProxy: {
      enabled: false,
    },
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
});