/* eslint-disable class-methods-use-this */

const NotImplementedMethodException = Error(
  'method not implemented in the derived class'
);
export default class Task {
  async start() {
    throw new NotImplementedMethodException();
  }

  async watch() {
    throw new NotImplementedMethodException();
  }
}
