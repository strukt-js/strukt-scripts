// eslint-disable-next-line jest/no-jest-import
import jest from 'jest';
import { getPreset, getArgsTaskObject } from '../utils/project';
import Task from './task';
import Logger from '../logger/logger';

export default class Eslint extends Task {
  logger = new Logger('test:[jest]');

  async start() {
    this.logger.debug('Started');

    const { jestPreset } = await import(getPreset());

    const config = {
      preset: jestPreset.name,
      ...getArgsTaskObject(),
    };

    try {
      const { results } = await jest.runCLI(config, [process.cwd()]);

      if (results.success) {
        return Promise.resolve(results);
      }

      return Promise.reject(results);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      this.logger.debug('Finish');
    }
  }
}
