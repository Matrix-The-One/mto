// https://prettier.io
module.exports = {
  semi: false,
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: 'lf',
  proseWrap: 'never',
  arrowParens: 'always',
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.json5'],
      options: {
        singleQuote: false,
        quoteProps: 'preserve',
      },
    },
    {
      files: ['*.yml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.(css|less|scss|sass|styl|stylus)'],
      options: {
        singleQuote: false,
      },
    },
  ],
  plugins: [
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrder: [
    '^(react|vue)(.*)',
    '^@?(ant|element)(.*)',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)',
    '^[.]{1,2}/(.+(?<![.]css|less|scss|sass|styl|stylus)$)',
    '^(.*).(css|less|scss|sass|styl|stylus)$',
  ],
}
