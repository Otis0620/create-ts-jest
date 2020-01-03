#!/usr/bin/env node
import { execSync } from 'child_process';
import { join } from 'path';
import { createDirectory, createSrc, createConfigFile } from './helpers';
import { templates } from './templates';
import { readFileSync, writeFileSync } from 'fs';

/**
 * Main method for running all the code.
 */
(function main() {
  const projectName = process.argv[2];

  if (!projectName) {
    console.error('Please provide a name for the project');
    return;
  }

  const newDirectory = `${process.cwd()}/${projectName}`;
  createDirectory(newDirectory);
  createConfigFile(newDirectory);
  // execSync(`cd ${projectName} && npm install`, { stdio: [0, 1, 2] });
})();
