import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://mortgagecalc.us',
  output: 'static',
  compressHTML: true,
  build: { assets: 'assets' }
});
