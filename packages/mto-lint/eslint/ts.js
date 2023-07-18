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
    requireConfigFile: false,
  },
  rules: {
    'no-eval': 0,
    'no-void': 0,
  },
  overrides: [
    {
      files: ['**/*.{ts,cts,mts}'],
      parser: '@typescript-eslint/parser',
      extends: ['standard-with-typescript', 'prettier'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: true,
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
      files: ['**/*.html'],
      plugins: ['html'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  ],
}
