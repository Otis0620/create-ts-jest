/**
 * gitignore template
 */
export const gitIgnore = `
node_modules
dist
`;

/**
 * src/index.ts template
 */
export const srcIndex = `
export function helloWorld(): string {
  return 'hello world';
}
`;

/**
 * src/index.test.ts template
 */
export const srcIndexTest = `
import { helloWorld } from './index';

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toEqual('hello world');
  });
});
`;
