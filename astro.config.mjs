// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import rehypeSlug from 'rehype-slug';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
  site: "https://junyuj.com",
  build: {
    format: "file", // Output slug.html instead of slug/index.html for GitHub Pages
  },
  trailingSlash: "never", // Match build.format: 'file'
  redirects: {
    '/research': '/',
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});