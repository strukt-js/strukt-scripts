#!/usr/bin/env node

/* eslint-disable import/extensions */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import createSpawnProcess from './src/utils/process.js';

const [, , scriptName, ...argsToChild] = process.argv;

if (!scriptName) {
  globalThis.process.exit(0);
}

const rootStruktScripts = path.parse(fileURLToPath(import.meta.url)).dir;

const scriptPath = path.format({
  dir: `${rootStruktScripts}/src/`,
  base: 'runner.js',
  root: '/',
});

if (!fs.existsSync(scriptPath)) {
  globalThis.process.exit(0);
}

const taskProcess = createSpawnProcess(scriptPath, [
  scriptName,
  ...argsToChild,
]);

if (taskProcess.status !== 0) {
  process.exitCode = taskProcess.status;
}
