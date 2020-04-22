class Logger {
  constructor(message) {
    this.message = message;
    this.isMaster = true;
  }

  log() {
    console.log(this.message);
  }
}

const littleLogger = new Logger('I am a real logger');
// const biggerLogger = new Logger('I do not care');

// // console.log(Object.getPrototypeOf(littleLogger));
