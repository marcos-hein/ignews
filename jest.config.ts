import { Config } from 'jest';

const config: Config = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(scss|css|sass)$': 'identity-obj-proxy',
  },
};

export default config;
