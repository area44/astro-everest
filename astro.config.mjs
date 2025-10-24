// @ts-check
import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const site = process.env.site || "http://localhost:4321";
const base = process.env.base || "/";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
});
