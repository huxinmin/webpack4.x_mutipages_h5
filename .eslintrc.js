module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  },
  globals: {
    'define': true,
    'module': true,
    'jQuery': true,
    'require': true,
    '$': true
  }
};
