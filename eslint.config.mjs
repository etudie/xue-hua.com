import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default [
    js.configs.recommended,

    // TypeScript rules (works for .ts/.tsx)
    ...tseslint.configs.recommended,

    // Astro rules (includes parsing + .astro support)
    ...astro.configs.recommended,

    // Optional: if you're using React in .tsx, you can add react linting later.
    // (Keeping this minimal unless you explicitly want react hooks + jsx-a11y.)

    // Prevent formatting conflicts with Prettier
    {
        rules: {},
    },
];