import { createAllConfigs, createDirectory, createSrc } from '@helpers/index';

/**
 * Main method for running all the code.
 */
(function main() {
  const projectName = process.argv[2];

  if (!projectName) {
    console.error('Please provide a name for the project');
    return;
  }

  const newDirectory = `${process.cwd()}/${projectName}`;
  const templates = `${process.cwd()}/src/templates`;

  createDirectory(newDirectory);
  createSrc(newDirectory);
  createAllConfigs(newDirectory, templates);
})();
