module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['perfectionist', 'react-refresh'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-import-module-exports': 0,
    'import/prefer-default-export': 0,
    'import/order': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 0,
    'no-restricted-exports': 0,
    'no-use-before-define': 'off',
    'react-refresh/only-export-components': 'warn',
    'react/button-has-type': 0,
    'react/display-name': 0,
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'natural',
        groups: [
          'dataComponent',
          'keyRef',
          'id',
          'className',
          'shorthand',
          'data',
          'unknown',
          'multiline',
          'callback',
        ],
        customGroups: {
          dataComponent: 'data-component',
          keyRef: ['key', 'ref'],
          id: 'id',
          className: 'className',
          data: 'data-*',
          callback: 'on*',
        },
      },
    ],
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-imports
    'perfectionist/sort-imports': [
      'error',
      {
        newlinesBetween: 'never',
        internalPattern: ['^@/.*'],
        groups: [
          ['builtin', 'external'],
          'internal',
          'internal-type',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
          'style',
        ],
      },
    ],
    // https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports
    'perfectionist/sort-named-imports': ['error'],
  },
};
