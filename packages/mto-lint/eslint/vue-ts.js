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
      files: ['**/*.{ts,cts,mts,tsx}'],
      parser: '@typescript-eslint/parser',
      extends: ['standard-with-typescript', 'prettier'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/prefer-ts-expect-error': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
    {
      files: ['**/*.vue'],
      parser: 'vue-eslint-parser',
      extends: ['standard-with-typescript', 'plugin:vue/vue3-recommended', 'prettier'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        parser: '@typescript-eslint/parser',
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue'],
      },
      rules: {
        'vue/no-useless-mustaches': 1,
        'vue/multi-word-component-names': 0,
        'vue/prefer-separate-static-class': 1,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/prefer-ts-expect-error': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
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
