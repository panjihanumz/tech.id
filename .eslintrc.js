module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/default': 2,
    'import/export': 2,
    'import/first': 'error',
    'import/named': 2,
    'import/namespace': 2,
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default-member': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'linebreak-style': ['error', 'unix'],
    'no-console': 2,
    'no-debugger': 2,
    'no-use-before-define': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/destructuring-assignment': [0],
    'react/forbid-prop-types': [0],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-indent': [0],
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/prefer-stateless-function': [0],
    'react/react-in-jsx-scope': 'off',
    'react/sort-comp': [0],
    'sort-imports': 'off',
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/no-floating-promises': 0,
    camelcase: 'off',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    semi: 'off'
  }
};
