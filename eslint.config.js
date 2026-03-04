import eslintParserAstro from "astro-eslint-parser";
import js from "@eslint/js";
import { parser as eslintParserTypeScript } from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "eslint/config";

export default defineConfig({
  extends: [js.configs.recommended, eslintPluginAstro.configs.recommended],
  ignores: ["node_modules", "dist", "coverage", "*.config.js", "*.config.mjs"],

  files: ["**/*.astro", "scripts/**/*.mjs", "scripts/**/*.js"],
  languageOptions: {
    parser: eslintParserAstro,
    parserOptions: {
      parser: eslintParserTypeScript,
    },
    globals: {
      ...globals.node,
    },
  },
  rules: {
    "astro/no-set-html-directive": "error",
    "astro/no-unsafe-inline-scripts": "error",
    "astro/no-unused-css-selector": "warn",
    "astro/sort-attributes": "warn",

    // "@typescript-eslint/no-unused-vars": [
    //   "warn",
    //   {
    //     argsIgnorePattern: "^_",
    //     varsIgnorePattern: "^_",
    //   },
    // ],
    // "@typescript-eslint/no-explicit-any": "warn",
  },
});
