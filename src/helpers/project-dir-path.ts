import { projectName } from '../config';

/**
 * Create the correct directory path for the project to be created.
 */
export function projectDirPath(): string {
  if (!projectName) {
    console.error('Please provide a name for the project');
    return;
  }

  return `${process.cwd()}/${projectName}`;
}
