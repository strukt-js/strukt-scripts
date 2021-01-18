import EventEmitter from 'events';
import { getProjectConfig, printBanner } from './utils/project';
import TaskFactory from './tasks/taskFactory';

printBanner();

const { taskName } = getProjectConfig();

const task = new TaskFactory(taskName);

process.on('uncaughtException', () => {
  process.exitCode = 1;
});

try {
  await task.start();
} catch (error) {
  new EventEmitter().emit('error');
}
