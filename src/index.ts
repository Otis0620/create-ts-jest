const fs = require('fs');

function createDir(directoryPath: string) {
  try {
    fs.mkdirSync(directoryPath, { recursive: true });
  } catch (err) {
    console.error('An error has occurred: ', err);
  }
}

function createConfigFile(dir: string, template: string, file: string) {
  const templatesPath = `${process.cwd()}/src/templates/${template}`;
  try {
    const prettierConfig = fs.readFileSync(templatesPath, 'utf8');

    fs.writeFileSync(`${dir}/${file}`, prettierConfig);
  } catch (error) {
    console.error('an error has occured ', error);
  }
}

(function main(directoryPath: string) {
  const newDirectory = `${process.cwd()}/${directoryPath}`;

  createDir(newDirectory);
  createConfigFile(newDirectory, 'prettier.txt', '.prettierrc');
  createConfigFile(newDirectory, 'jest-config.txt', 'jest.config.js');
})('test');
