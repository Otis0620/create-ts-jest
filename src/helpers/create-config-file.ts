import { writeFileSync } from 'fs';
import { templates } from '../templates';

/**
 * Create a configuration file using a specific template.
 */
export function createConfigFile(dir: string) {
  try {
    templates.forEach(({ fileName, contents, exports }) => {
      let fileContents = JSON.stringify(contents, undefined, 2);
      if (exports) {
        fileContents = 'module.exports = ' + JSON.stringify(contents, undefined, 2);
      }
      writeFileSync(`${dir}/${fileName}`, fileContents);
    });
  } catch (error) {
    console.error('an error has occured ', error);
  }
}
