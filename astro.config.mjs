import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  integrations: [sanity(), react(), sitemap()]
});