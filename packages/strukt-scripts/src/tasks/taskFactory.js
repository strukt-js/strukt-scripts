import LintTask from './lintTask';
import TestTask from './testTask';

export default function TaskFactory(taskName) {
  if (taskName === 'lint') {
    return new LintTask();
  }

  if (taskName === 'test') {
    return new TestTask();
  }

  return null;
}
