module.exports = {
  transform: {
    '\\.js$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '/bin',
    '/build',
    '/node_modules/',
    'src/e2e.spec.js',
  ],
};
