// @ts-check

import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? "https://area44.github.io" : "http://localhost:3000",
  base: process.env.CI ? "/astro-everest/" : undefined,
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
});
