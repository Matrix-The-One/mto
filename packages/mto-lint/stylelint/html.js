module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-html', 'stylelint-config-recess-order'],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'value-no-vendor-prefix': null,
  },
}
