const fs = require('fs');

function createDir(dir: string) {
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch (err) {
    console.error('An error has occurred: ', err);
  }
}

function createConfigFile(dir: string, template: string, file: string) {
  const templatesPath = `${process.cwd()}/src/templates/${template}`;
  try {
    const templateConfig = fs.readFileSync(templatesPath, 'utf8');

    fs.writeFileSync(`${dir}/${file}`, templateConfig);
  } catch (error) {
    console.error('an error has occured ', error);
  }
}

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

function createSrc(dir: string) {
  const srcDir = `${dir}/src`;

  createDir(srcDir);
  createConfigFile(dir, `index.ts.txt`, '/src/index.ts');
  createConfigFile(dir, `index.test.ts.txt`, '/src/index.test.ts');
}

(function main(directoryPath: string) {
  const newDirectory = `${process.cwd()}/${directoryPath}`;
  const templates = `${process.cwd()}/src/templates`;

  createDir(newDirectory);
  createSrc(newDirectory);
  createAllConfigs(newDirectory, templates);
})('test');
