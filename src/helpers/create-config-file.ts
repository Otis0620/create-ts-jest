import { writeFileSync } from 'fs';
import { templates } from '../templates/all-templates';

/**
 * Create a configuration file using a specific template.
 */
export function createConfigFile() {
  try {
    templates.forEach(({ dir, contents, exports, fileName }) => {
      const projectPath = `${dir}/${fileName}`;

      if (typeof contents === 'string') {
        writeFileSync(projectPath, contents);
      } else if (exports) {
        const exportedContents = `module.exports = ${JSON.stringify(contents, undefined, 2)}`;

        writeFileSync(projectPath, exportedContents);
      } else {
        writeFileSync(projectPath, JSON.stringify(contents, undefined, 2));
      }
    });
  } catch (error) {
    console.error('an error has occured ', error);
  }
}
