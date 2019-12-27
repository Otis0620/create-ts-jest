import { readdirSync } from 'fs';
import { createDirectory, createConfigFile } from '@helpers/index';

/**
 * Loop over all configuration files in the templates directory and create them.
 */
function createAllConfigs(dir: string, templates: string) {
  try {
    const templateFiles = readdirSync(templates);

    templateFiles.forEach(function(templateFile) {
      const fileName = templateFile.replace('.txt', '');
      const srcFileName = 'index';

      if (!fileName.includes(srcFileName)) {
        createConfigFile(dir, templateFile, fileName);
      }
    });
  } catch (error) {
    console.error('an error has occured ', error);
  }
}

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
