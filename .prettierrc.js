module.exports = {
  arrowParens: 'avoid',
  printWidth: 120,
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.ts',
      options: { parser: 'typescript' }
    },
    {
      files: '*.sol',
      options: {
        bracketSpacing: true,
        explicitTypes: 'always',
        printWidth: 100,
        singleQuote: false,
        tabWidth: 4,
        useTabs: false
      }
    }
  ]
};
