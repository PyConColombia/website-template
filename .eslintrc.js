module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    jest: true,
    jquery: true,
    node: true,
  },
  parser: 'babel-eslint',
  settings: {
    react: {
      version: '16.12.0',
    },
  },
  globals: {
    componentHandler: 'readonly',
  },
  plugins: ['simple-import-sort'],
};
