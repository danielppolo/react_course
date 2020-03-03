module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    document: true,
    window: true,
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/no-danger': 0,
    'import/no-named-as-default-member': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 0,
    "react/prop-types": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'jsx-quotes': [2, 'prefer-double'],
    'no-restricted-imports': [0, { patterns: ['../*'] }],
    'no-underscore-dangle': ['error', {
      allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
    }],
  },
  settings: {
    "import/extensions": [
      ".js",
      ".jsx",
      ".tsx"
    ],
  },
}