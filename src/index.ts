#!/usr/bin/env node

import { execSync } from 'child_process';
import { createConfigFile } from './helpers/create-config-file';
import { createDirectory } from './helpers/create-directory';
import { projectDirPath } from './helpers/project-dir-path';
import { srcPath } from './config';

/**
 * Main method for running all the code.
 */
(function main() {
  createDirectory(projectDirPath());
  createDirectory(srcPath);
  createConfigFile();
  execSync(`cd ${projectDirPath()} && npm install`, { stdio: [0, 1, 2] });
})();
