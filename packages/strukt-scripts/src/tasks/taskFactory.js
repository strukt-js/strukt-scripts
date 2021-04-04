import EslintTask from './eslint';
import JestTask from './jest';
import StoryBookTask from './storybook';

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

  return null;
}
