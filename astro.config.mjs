import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
export default defineConfig({
  site: 'https://mortgage.socialninjas.in',
  output: "hybrid",
  compressHTML: true,
  build: { assets: 'assets' },
  adapter: cloudflare()
});