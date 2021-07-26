module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
    'semi': 'off',
    'quotes': 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': 'warn',
    'object-curly-spacing': 'warn',
    "react/prop-types": 'off',
  },
};
