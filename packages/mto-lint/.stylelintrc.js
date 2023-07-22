/**
 * @link https://stylelint.io
 * @type {import('stylelint').Config}
 */
module.exports = {
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'value-no-vendor-prefix': null,
  },
  overrides: [
    {
      files: ['**/*.css'],
      extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-css-modules',
        'stylelint-config-recess-order',
      ],
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-css-modules',
        'stylelint-config-recess-order',
      ],
      rules: {
        'at-rule-no-unknown': null,
      },
    },
    {
      files: ['**/*.styl', '**/*.stylus'],
      customSyntax: 'postcss-styl',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-css-modules',
        'stylelint-config-recess-order',
      ],
    },
    {
      files: ['**/*.html', '**/*.svelte', '**/*.astro'],
      customSyntax: 'postcss-html',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-html',
        'stylelint-config-recess-order',
      ],
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-vue',
        'stylelint-config-recess-order',
      ],
    },
    {
      files: [
        '**/*.js',
        '**/*.cjs',
        '**/*.mjs',
        '**/*.jsx',
        '**/*.ts',
        '**/*.cts',
        '**/*.mts',
        '**/*.tsx',
      ],
      customSyntax: 'postcss-styled-syntax',
      extends: ['stylelint-config-standard'],
    },
  ],
}
