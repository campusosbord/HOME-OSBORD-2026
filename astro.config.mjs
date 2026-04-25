// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://osbord.com',
  output: 'server',
  trailingSlash: 'always',
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
});