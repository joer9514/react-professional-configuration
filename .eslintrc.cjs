module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  globals: { JSX: true },
  settings: {
    react: { version: 'detect' },
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'vite.config.ts',
    'jest.config.ts',
    'jest.setup.ts',
    '.eslintrc.cjs',
    'tailwind.config.cjs',
    'postcss.config.cjs',
  ],
};
