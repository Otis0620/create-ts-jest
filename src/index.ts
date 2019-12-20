const fs = require('fs');

function createDir(directoryPath: string) {
  try {
    fs.mkdirSync(directoryPath, { recursive: true });
  } catch (err) {
    console.error('An error has occurred: ', err);
  }
}

function createPrettierConfig(dir: string) {
  const templatesPath = `${process.cwd()}/src/templates/prettier.txt`;
  try {
    const prettierConfig = fs.readFileSync(templatesPath, 'utf8');

    fs.writeFileSync(`${dir}/.prettierrc`, prettierConfig);
  } catch (error) {
    console.error('an error has occured ', error);
  }
}

(function main(directoryPath: string) {
  const newDirectory = `${process.cwd()}/${directoryPath}`;

  createDir(newDirectory);
  createPrettierConfig(newDirectory);
})('test');
