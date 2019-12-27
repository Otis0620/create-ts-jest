import { createAllConfigs, createDirectory, createConfigFile } from '@helpers/index';

/**
 * Create the src file where the main index.ts and index.test.ts files live.
 */
function createSrc(dir: string) {
  const srcDir = `${dir}/src`;

  createDirectory(srcDir);
  createConfigFile(dir, `index.ts.txt`, '/src/index.ts');
  createConfigFile(dir, `index.test.ts.txt`, '/src/index.test.ts');
}

/**
 * Main method for running all the code.
 */
(function main(directoryPath: string) {
  const newDirectory = `${process.cwd()}/${directoryPath}`;
  const templates = `${process.cwd()}/src/templates`;

  createDirectory(newDirectory);
  createSrc(newDirectory);
  createAllConfigs(newDirectory, templates);
})('test');
