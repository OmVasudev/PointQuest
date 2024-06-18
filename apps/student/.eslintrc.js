/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: ["next.config.mjs"],
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  rules: {
    "turbo/no-undeclared-env-vars": "off",
  },
};
