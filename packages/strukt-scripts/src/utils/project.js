/* eslint-disable import/no-dynamic-require */
import { log } from 'console';
import yargs from 'yargs';
import { createRequire } from 'module';
import { clear } from './console';

const require = createRequire(import.meta.url);

const [nodePath, , projectPath, taskName, ...argsToTask] = globalThis.process.argv;

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
  const args = argsTask.filter((arg) => arg !== '--inspect-break');

  const objectArgs = yargs(args).parserConfiguration(optionsParse).argv;

  Reflect.deleteProperty(objectArgs, '$0');
  Reflect.deleteProperty(objectArgs, '_');

  return objectArgs;
}
