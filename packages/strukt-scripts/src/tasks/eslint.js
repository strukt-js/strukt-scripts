import { ESLint } from 'eslint';
import { getPreset, getArgsTaskObject } from '../utils/project';
import Task from './task';
import Logger from '../logger/logger';

function getErrorsAndWarningsCount(accumulator, result) {
  return accumulator + result.warningCount + result.errorCount;
}

export default class EslintTask extends Task {
  logger = new Logger('lint:eslint:');

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
      const results = await linter.lintFiles(['src/**/*.{js,ts,tsx}']);
      const formatter = await linter.loadFormatter('stylish');
      const resultText = formatter.format(results);

      ESLint.outputFixes(results);

      const errorsAndWarningsCount = results.reduce(
        getErrorsAndWarningsCount,
        0
      );

      if (resultText) {
        this.logger.info(resultText);
      } else {
        this.logger.info('🎉 Cool, theres no lint problems in your code');
      }

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
