import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://mortgage.socialninjas.in',
  output: 'static',
  compressHTML: true,
  build: { assets: 'assets' }
});
