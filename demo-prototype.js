
/**
 * Prototype inheritance
 */
// const logger = {
//   text: 'I am a prototype expert',
//   type: 'server',
//   log: function() {
//     console.log(this.text);
//   }
// }
// const littleLogger = {
//   text: 'I am nothing'
// }
// Object.setPrototypeOf(littleLogger, logger);
// littleLogger.log();
// // Object.getPrototypeOf(littleLogger);

/**
 * new keyword
 */
// function Button(text) {
//   this.text = text;
// }
// Button.prototype.click = function () {
//   console.log(this.text);
// }

// const greetBtn = new Button('hello');
// const farewellBtn = new Button('good bye');
// greetBtn.click();
// // console.log(Object.getPrototypeOf(greetBtn));


/**
 * prototype vs __proto__
 */
/**
 * use setPrototypeOf
 */
// const logger = {
//   text: 'I am a prototype expert',
//   isMaster: true,
//   log: function() {
//     console.log(this.text);
//   }
// }
// const littleLogger = {
//   text: 'I am nothing'
// }

// Object.setPrototypeOf(littleLogger, logger);
// littleLogger.log();

// // logger.color = 'blue';
// // console.log(littleLogger.color);

// // console.log(littleLogger.__proto__);
// // console.log('littleLogger.__proto__ === logger? ', littleLogger.__proto__ === logger);

/**
 * use new keyword
 */
// function Logger(text) {
//   this.text = text;
//   this.isMaster = true;
//   this.log = function() {
//     console.log(this.text);
//   }
// }

// const littleLogger = new Logger('I am a little logger');
// console.log(littleLogger.log());

// // console.log(littleLogger.__proto__);
// // console.log('littleLogger.__proto__ === Logger.prototype? ', littleLogger.__proto__ === Logger.prototype);

// // console.log('littleLogger.prototype ?: ', littleLogger.prototype);

// // function a() {}
// // console.log('a.prototype', a.prototype);

// // const obj = {}
// // console.log('obj.prototype', obj.prototype);
// // console.log('obj.__proto__', obj.__proto__);
// // console.log('obj.__proto__ === Object.prototype?', obj.__proto__ === Object.prototype);
// the global Object is actually a function