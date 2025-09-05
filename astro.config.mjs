// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://nthadrien.github.io',
  base: '/portfolio',

  vite: {
      // @ts-ignore
      plugins: [tailwindcss()],
  },
  integrations: [react()],
  output:"static",
});