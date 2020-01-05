export const srcIndexTest = `
import { helloWorld } from './index';

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toEqual('hello world');
  });
});
`;

export const srcIndex = `
export function helloWorld(): string {
  return 'hello world';
}
`;

export const gitIgnore = `
node_modules
dist
`;
