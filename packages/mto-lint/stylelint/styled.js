/**
 * @link https://stylelint.io
 * @type {import('stylelint').Config}
 */
module.exports = {
  customSyntax: 'postcss-styled-syntax',
  extends: ['stylelint-config-standard'],
  rules: {
    'value-no-vendor-prefix': null,
  },
}
