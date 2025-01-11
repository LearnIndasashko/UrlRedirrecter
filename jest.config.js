/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch : ["./**/*.spec.ts", "./**/*.e2e-spec.ts"],
  rootDir: './',
  moduleNameMapper : {
    '^@app$': '<rootDir>/src/application/index',
    '^@config$': '<rootDir>/src/config/index',
    '^@database$': '<rootDir>/src/database/index',
    '^@domain$': '<rootDir>/src/domain/index',
    '^@presentation$': '<rootDir>/src/presentation/index',
    '^@infrastructure$': '<rootDir>/src/infrastructure/index',
    '^src/(.*)$': '<rootDir>/src/$1/index',
  }
};