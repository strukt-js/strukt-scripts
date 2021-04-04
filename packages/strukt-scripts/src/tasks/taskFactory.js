import EslintTask from './eslint';
import JestTask from './jest';

export default function TaskFactory(taskName) {
  if (taskName === 'lint') {
    return new EslintTask();
  }

  if (taskName === 'test') {
    return new JestTask();
  }

  return null;
}
