import { ESLint } from 'eslint';
import { getPreset, getArgsTaskObject } from '../utils/project';
import Task from './task';
import Logger from '../logger/logger';

export default class LintTask extends Task {
  logger = new Logger('lint');

  async start() {
    this.logger.debug('Started');

    const { eslintPreset } = await import(getPreset());

    const options = {
      reportUnusedDisableDirectives: 'error',
      useEslintrc: false,
      overrideConfig: {
        ...eslintPreset.config,
      },
      ...getArgsTaskObject(),
    };

    try {
      const linter = new ESLint(options);
      const results = await linter.lintFiles(['src/**/*.{js,ts, tsx}']);
      const formatter = await linter.loadFormatter('stylish');
      const resultText = formatter.format(results);

      ESLint.outputFixes(results);

      const errorsAndWarningsCount = results.reduce(
        (acc, result) => acc + result.warningCount + result.errorCount, 0,
      );

      this.logger.info(resultText);

      if (errorsAndWarningsCount > 0) {
        return Promise.reject(results);
      }

      return Promise.resolve(results);
    } catch (error) {
      this.logger.info(error);
      return Promise.reject();
    } finally {
      this.logger.debug('Finish');
    }
  }
}
