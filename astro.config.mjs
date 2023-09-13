import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import svelte from '@astrojs/svelte';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // see PocketBase Javascript sdk
  adapter: netlify(),
  integrations: [svelte(), tailwind()]
});