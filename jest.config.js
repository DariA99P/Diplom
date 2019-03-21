module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/**.stories.{js,jsx}',
    '!src/index.js',
    '!src/store.js',
    '!src/registerServiceWorker.js',
    '!src/**/(automation|__mocks__|constants)/**/*.{js,jsx,mjs}',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  setupFiles: [
    '<rootDir>/config/polyfills.js',
    '<rootDir>/jestsetup.config.js',
  ],
  modulePaths: ['src'],
  testMatch: [
    '<rootDir>/src/__tests__/unit/**/(*.)+(spec|test).{js,jsx,mjs}',
    '<rootDir>/src/**/(*.)+(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'mjs',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
