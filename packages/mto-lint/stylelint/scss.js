module.exports = {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'value-no-vendor-prefix': null,
  },
}
