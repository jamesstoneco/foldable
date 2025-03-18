module.exports = {
  root: true,
  extends: ['../../packages/config/eslint/base.js'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['dist', 'node_modules', '*.config.js'],
};
