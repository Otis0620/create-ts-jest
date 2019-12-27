import { mkdirSync } from 'fs';

/**
 * Create a directory with a specific name.
 */
export function createDirectory(directoryName: string) {
  try {
    mkdirSync(directoryName, { recursive: true });
  } catch (err) {
    console.error('An error has occurred: ', err);
  }
}
