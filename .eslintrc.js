/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "@jakejarvis/eslint-config",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/no-unescaped-entities": "off",
    "prettier/prettier": [
      "error",
      {
        // normal .prettierrc config:
        singleQuote: false,
        tabWidth: 2,
        printWidth: 120,
      },
    ],
  },
  overrides: [
    {
      files: ["*.md", "*.mdx"],
      extends: ["plugin:mdx/recommended"],
      rules: {
        "react/jsx-no-undef": "off",
        "prettier/prettier": [
          "error",
          {
            // normal .prettierrc config:
            singleQuote: false,
            tabWidth: 2,
            printWidth: 120,
          },
        ],
      },
    },
  ],
  ignorePatterns: ["README.md"],
};
