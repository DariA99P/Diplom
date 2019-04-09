module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/**.stories.{js,jsx}',
    '!src/index.js',
    '!src/store.js',
    '!src/registerServiceWorker.js',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  setupFiles: [
    '<rootDir>/config/polyfills.js',
    '<rootDir>/jestsetup.config.js',
  ],
  modulePaths: ['src'],
  testMatch: [
    '<rootDir>/src/**/__tests__/automation/**/?(*.)steps.{js,jsx,mjs}',
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
  reporters: ['default', 'jest-allure'],
};
