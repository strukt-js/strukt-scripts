import { spawnSync } from 'child_process';

function createSpawnProcess(pathScript, argsToChild = []) {
  const nodeArgs = [
    '--experimental-specifier-resolution=node',
    '--experimental-import-meta-resolve',
    '--experimental-top-level-await',
    '--experimental-vm-modules',
    '--no-warnings',
  ];

  if (argsToChild.includes('--inspect-brk')) {
    nodeArgs.unshift('--inspect-brk');
  }

  const projectDir = process.cwd();

  return spawnSync(
    'node',
    [...nodeArgs, pathScript, projectDir, ...argsToChild],
    {
      stdio: 'inherit',
    }
  );
}

export default createSpawnProcess;
