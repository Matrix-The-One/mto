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
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    requireConfigFile: false,
    babelOptions: {
      cwd: __dirname,
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    'no-eval': 0,
    'no-void': 0,
    'react/display-name': 0,
    'react/self-closing-comp': 1,
    'react/style-prop-object': 1,
    'react/void-dom-elements-no-children': 1,
    'react/jsx-fragments': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-curly-brace-presence': 1,
    'react-hooks/exhaustive-deps': 0,
  },
  overrides: [
    {
      files: ['**/*.{ts,cts,mts,tsx}'],
      parser: '@typescript-eslint/parser',
      extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'prettier',
      ],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        project: true,
      },
      rules: {
        'react-hooks/exhaustive-deps': 0,
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
