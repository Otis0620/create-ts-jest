export const templates = [
  {
    fileName: '.eslintrc',
    contents: {
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
      parserOptions: {
        ecmaVersion: 2018,
      },
    },
    exports: false,
  },
  {
    fileName: '.prettierrc',
    contents: {
      semi: true,
      trailingComma: 'all',
      singleQuote: true,
      printWidth: 120,
      tabWidth: 2,
    },
    exports: false,
  },
  {
    fileName: 'jest.config.js',
    contents: {
      preset: 'ts-jest',
      testEnvironment: 'node',
    },
    exports: true,
  },
  {
    fileName: 'package.json',
    contents: {
      name: '',
      version: '1.0.0',
      description: '',
      main: 'index.js',
      scripts: {
        build: 'rimraf dist && tsc',
        unit: 'jest',
      },
      keywords: [],
      author: '',
      license: 'ISC',
      devDependencies: {
        '@types/jest': '^24.0.23',
        '@types/node': '^12.12.17',
        '@typescript-eslint/eslint-plugin': '^2.11.0',
        '@typescript-eslint/parser': '^2.11.0',
        eslint: '^6.7.2',
        jest: '^24.9.0',
        rimraf: '^3.0.0',
        'ts-jest': '^24.2.0',
        'ts-node': '^8.5.4',
        typescript: '^3.7.3',
      },
    },
    exports: false,
  },
  {
    fileName: 'tsconfig.json',
    contents: {
      compilerOptions: {
        target: 'es5',
        module: 'commonjs',
        outDir: 'dist',
        sourceMap: false,
        allowSyntheticDefaultImports: true,
        baseUrl: '.',
        paths: {
          '*': ['node_modules/'],
          'typings/*': ['src/typings/*'],
        },
      },
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts'],
    },
    exports: false,
  },
  {
    fileName: 'index.ts',
    contents: `export function helloWorld(): string {
      return 'hello world'
    };`,
    exports: false,
  },
  {
    fileName: 'index.test.ts',
    contents: `
    import { helloWorld } from '@/index';

    describe('helloWorld', () => {
      it('should return hello world', () => {
        expect(helloWorld('world')).toEqual('hello world');
      });
    });`,
    exports: false,
  },
  {
    fileName: '.gitignore',
    contents: `
    node_modules
    dist`,
    exports: false,
  },
];
