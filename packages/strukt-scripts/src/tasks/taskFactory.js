import EslintTask from './eslint';
import JestTask from './jest';
import StoryBookTask from './storybook';
import RollupTask from './rollup';

export default function TaskFactory(taskName) {
  if (taskName === 'lint') {
    return new EslintTask();
  }

  if (taskName === 'test') {
    return new JestTask();
  }

  if (taskName === 'storybook') {
    return new StoryBookTask();
  }

  if (taskName === 'build:prod') {
    return new RollupTask();
  }

  return null;
}
