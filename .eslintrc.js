module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "plugin:jest/recommended", 'plugin:@typescript-eslint/recommended', "prettier"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "jest/valid-title": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-restricted-globals": "off",
    "no-plusplus": "off",
    "import/no-unresolved": "off", // https://github.com/typescript-eslint/typescript-eslint/issues/1624
    "import/extensions": ["warn", "never"],
    "@typescript-eslint/ban-ts-comment": "off"
  },
};
