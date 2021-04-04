/* eslint-disable import/no-dynamic-require */
import url from 'url';
import path from 'path';
import { createRequire } from 'module';
import { log } from 'console';
import yargs from 'yargs';
import { clear } from './console';

const require = createRequire(import.meta.url);

const [
  nodePath,
  ,
  projectPath,
  taskName,
  ...argsToTask
] = globalThis.process.argv;

export function getPackageFile() {
  return require(`${projectPath}/package.json`);
}

export function getProjectRoot() {
  return projectPath;
}

export function getPreset() {
  const packageFile = getPackageFile();
  return packageFile.strukt.preset;
}

export async function printBanner() {
  const preset = await import(getPreset());
  clear();
  log(preset.banner);
}

export function getProjectConfig() {
  const packageFilePath = `${projectPath}/package.json`;

  return {
    nodePath,
    projectPath,
    taskName,
    packageFilePath,
    preset: getPreset,
    argsTask: argsToTask,
  };
}

export function getArgsTaskObject(optionsParse = { 'strip-dashed': true }) {
  const { argsTask } = getProjectConfig();
  const args = argsTask.filter((arg) => arg !== '--inspect-brk');

  const objectArgs = yargs(args).parserConfiguration(optionsParse).argv;

  Reflect.deleteProperty(objectArgs, '$0');
  Reflect.deleteProperty(objectArgs, '_');

  return objectArgs;
}

export async function resolvePackageDir(packageName) {
  return path.parse(new URL(await import.meta.resolve(packageName)).pathname)
    .dir;
}
