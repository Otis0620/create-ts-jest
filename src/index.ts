const fs = require('fs');

/**
 * Create a directory with a specific name.
 */
function createDir(directoryName: string) {
  try {
    fs.mkdirSync(directoryName, { recursive: true });
  } catch (err) {
    console.error('An error has occurred: ', err);
  }
}

/**
 * Create a configuration file using a specific template.
 */
function createConfigFile(dir: string, template: string, file: string) {
  const templatesPath = `${process.cwd()}/src/templates/${template}`;
  try {
    const templateConfig = fs.readFileSync(templatesPath, 'utf8');

    fs.writeFileSync(`${dir}/${file}`, templateConfig);
  } catch (error) {
    console.error('an error has occured ', error);
  }
}

/**
 * Loop over all configuration files in the templates directory and create them.
 */
function createAllConfigs(dir: string, templates: string) {
  try {
    const templateFiles = fs.readdirSync(templates);

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

  createDir(srcDir);
  createConfigFile(dir, `index.ts.txt`, '/src/index.ts');
  createConfigFile(dir, `index.test.ts.txt`, '/src/index.test.ts');
}

/**
 * Main method for running all the code.
 */
(function main(directoryPath: string) {
  const newDirectory = `${process.cwd()}/${directoryPath}`;
  const templates = `${process.cwd()}/src/templates`;

  createDir(newDirectory);
  createSrc(newDirectory);
  createAllConfigs(newDirectory, templates);
})('test');
