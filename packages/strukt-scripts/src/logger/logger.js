import chalk from 'chalk';
import console from 'console';

export const LOG_LEVEL = {
  BUILD_TIME: 0,
  DEV_TIME: 1,
};

export default class Logger {
  constructor(logName, level = LOG_LEVEL.DEV_TIME) {
    this.logName = logName;
    this.LOG_LEVEL = level;
  }

  getDateTime() {
    const dateTime = new Date(Date.now());

    if (this.LOG_LEVEL === LOG_LEVEL.BUILD_TIME) {
      return dateTime.toISOString();
    }

    const formatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    };

    const formatter = Intl.DateTimeFormat('en', formatOptions).format;
    return formatter(dateTime);
  }

  info(text) {
    const dateTime = this.getDateTime();
    const logName = chalk.blue.bold(this.logName);
    console.log(`${dateTime} ${logName}: ${text}`);
  }

  debug(text) {
    if (this.LOG_LEVEL === LOG_LEVEL.BUILD_TIME) {
      const dateTime = this.getDateTime();
      const logName = chalk.blue.bold(this.logName);
      console.log(`${dateTime} ${logName}: ${text}`);
    }
  }
}
