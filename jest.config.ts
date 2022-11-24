/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|tests).[tj]s?(x)',
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.ts?$': 'ts-jest',
  },

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },

  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Automatically reset mock state before every test
  resetMocks: true,

  // Reset the module registry before running each individual test
  resetModules: true,

  // Automatically restore mock state and implementation before every test
  restoreMocks: true,

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',
};
