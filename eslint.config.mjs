import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["node_modules", "dist", ".astro", "coverage", "*.config.js", "*.config.mjs"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  ...astro.configs.recommended,

  {
    files: ["scripts/**/*.mjs", "scripts/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);
