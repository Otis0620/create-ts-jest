import { readdirSync } from 'fs';
import { createConfigFile } from '@helpers/index';

/**
 * Loop over all configuration files in the templates directory and create them.
 */
export function createAllConfigs(dir: string, templates: string) {
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
