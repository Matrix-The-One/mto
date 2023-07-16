module.exports = {
  customSyntax: 'postcss-less',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'value-no-vendor-prefix': null,
    'at-rule-no-unknown': null,
  },
}