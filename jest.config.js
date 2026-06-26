/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: ['*/**.js', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
};
