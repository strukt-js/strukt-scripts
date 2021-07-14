import { rollup } from 'rollup';
import loadConfigFile from 'rollup/dist/loadConfigFile';
import { getPreset, getPackageFile } from '../utils/project';
import Task from './task';
import Logger from '../logger/logger';

export default class RollupTask extends Task {
  logger = new Logger('test:rollup:');

  async start() {
    this.logger.debug('Start');

    const { rollupPreset } = await import(getPreset());

    const { main } = getPackageFile();

    const rollupConfigFilePath = await import.meta.resolve(rollupPreset.name);

    try {
      const { options, warnings } = await loadConfigFile(
        rollupConfigFilePath.replace(/file:\/\//, ''),
        {
          input: main,
        }
      );

      if (options.count) {
        this.logger.log(`We currently have ${options.count} warnings`);
        warnings.flush();
      }

      const bundle = await rollup(options[0]);

      await bundle.write(options[0].output[0]);

      bundle.close();

      return null;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      this.logger.debug('Finish');
    }
  }
}
