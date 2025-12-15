import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...import("globals").then((g) => g.browser),
      },
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/indent": ["error", 2],
    },
  },
];
