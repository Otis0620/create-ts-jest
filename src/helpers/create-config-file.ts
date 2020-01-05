import { writeFileSync } from 'fs';
import { templates } from '../templates/all-templates';

/**
 * Create a configuration file using a specific template.
 */
export function createConfigFile() {
  try {
    templates.forEach(({ dir, fileName, contents, exports }) => {
      if (typeof contents === 'string') {
        writeFileSync(`${dir}/${fileName}`, contents);
      } else if (exports) {
        const exportedContents = `module.exports = ${JSON.stringify(contents, undefined, 2)}`;

        writeFileSync(`${dir}/${fileName}`, exportedContents);
      } else {
        writeFileSync(`${dir}/${fileName}`, JSON.stringify(contents, undefined, 2));
      }
    });
  } catch (error) {
    console.error('an error has occured ', error);
  }
}
