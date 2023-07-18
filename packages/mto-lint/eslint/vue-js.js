/**
 * @link https://eslint.org
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['standard', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    requireConfigFile: false,
  },
  rules: {
    'no-eval': 0,
    'no-void': 0,
  },
  overrides: [
    {
      files: ['**/*.vue'],
      parser: 'vue-eslint-parser',
      extends: ['standard', 'plugin:vue/vue3-recommended', 'prettier'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
      },
      rules: {
        'vue/no-useless-mustaches': 1,
        'vue/multi-word-component-names': 0,
        'vue/prefer-separate-static-class': 1,
      },
    },
    {
      files: ['**/*.html'],
      plugins: ['html'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  ],
}
