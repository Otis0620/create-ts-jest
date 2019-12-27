import { createAllConfigs, createDirectory, createSrc } from '@helpers/index';

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
