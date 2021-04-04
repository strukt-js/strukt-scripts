import LintTask from './lintTask';
import TestTask from './testTask';
import StoryBookTest from './storybook';

export default function TaskFactory(taskName) {
  if (taskName === 'lint') {
    return new LintTask();
  }

  if (taskName === 'test') {
    return new TestTask();
  }

  if (taskName === 'dev:storybook') {
    return new StoryBookTest();
  }

  return null;
}
