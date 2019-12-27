import { createDirectory, createConfigFile } from '@helpers/index';

/**
 * Create the src file where the main index.ts and index.test.ts files live.
 */
export function createSrc(dir: string) {
  const srcDir = `${dir}/src`;

  createDirectory(srcDir);
  createConfigFile(dir, `index.ts.txt`, '/src/index.ts');
  createConfigFile(dir, `index.test.ts.txt`, '/src/index.test.ts');
}
