module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'import/no-unresolved': 'off',
    'import/no-cycle': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
