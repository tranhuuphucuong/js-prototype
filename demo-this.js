// 'use strict';

/**
 * case 1
 * 
 * Global
 */
// this;
console.group('Global');
console.log('this: ', this); // global object or window object
console.log('this === window?', this === window);
console.groupEnd();

/**
 * case 2
 * 
 * Calling a function
 */
// func();
console.group('Calling a function');
function logger() {
  console.log('this: ', this); // global object or underfined in strict mode
}
logger();
// window.logger();
console.groupEnd();

/**
 * case 3
 * 
 * calling a method of an object
 */
// Obj.func();
console.group('Calling a method');
const batman = {
  name: 'Bruce',
  log: function () {
    console.log('who am I?: ', this)
  }
}
batman.log();
console.groupEnd();

/**
 * case 3.1
 */
// const superman = {
//   name: 'clark kent',
//   log: batman.log
// }
// superman.log();

/**
 * case 4
 * 
 * Calling a method of a newly created object using Constructor
 */
console.group('Inside function constructor');
function Logger(name) {
  this.name = name;
  console.log('this is a new object: ', this);
}
const serverLogger = new Logger('Dev Server');
console.log('serverLogger: ', serverLogger);
console.groupEnd();

/**
 * case 5
 * 
 * explicitly set
 */
console.group('Explicitly set');
const languages = {
  text: 'c++',
  hello: function () {
    console.log('hello world from', this.text);
  }
}
// const emptyHello = languages.hello;
// emptyHello();
const myHello = languages.hello.bind(languages);
myHello();
console.groupEnd();

/**
 * case 6
 * 
 * Arrow function
 */
console.group('Arrow function');
const c = {
  that: this,
  text: 'c++',
  hello: (params) => {
  }
}
c.hello();
console.groupEnd();
