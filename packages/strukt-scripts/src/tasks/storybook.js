import {
  getPreset,
  resolvePackageDir,
  getProjectRoot,
  getArgsTaskObject,
} from '../utils/project';
import Task from './task';
import Logger from '../logger/logger';

export default class StoryBookTask extends Task {
  logger = new Logger('storybook');

  async start() {
    this.logger.debug('Started');

    const { storyBookPreset } = await import(getPreset());
    const args = getArgsTaskObject();

    try {
      const standalone = await (
        await import(
          `@storybook/${storyBookPreset.config.framework}/standalone`
        )
      ).default;

      const configDir = await resolvePackageDir(storyBookPreset.name);

      return await standalone({
        rootDir: getProjectRoot(),
        mode: args.mode ?? 'dev',
        configDir,
        outputDir: `${getProjectRoot()}//dist/storybook`,
        quiet: true,
      });
    } catch (error) {
      this.logger.info(error);
      return Promise.reject(error);
    } finally {
      this.logger.debug('Finish');
    }
  }
}
