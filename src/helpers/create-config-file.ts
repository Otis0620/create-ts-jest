import { readFileSync, writeFileSync } from 'fs';

/**
 * Create a configuration file using a specific template.
 */
export function createConfigFile(dir: string, template: string, file: string) {
  const templatesPath = `${process.cwd()}/src/templates/${template}`;

  try {
    const templateConfig = readFileSync(templatesPath, 'utf8');

    writeFileSync(`${dir}/${file}`, templateConfig);
  } catch (error) {
    console.error('an error has occured ', error);
  }
}
