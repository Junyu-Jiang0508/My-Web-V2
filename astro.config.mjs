// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://junyu-jiang0508.github.io",
  base: "/My-Web-V2",
  redirects: {
    '/research': '/',
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});