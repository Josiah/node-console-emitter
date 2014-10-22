# Console Emitter

> Implementation of the [console API](http://nodejs.org/api/console.html) which
> emits appropriate events on all method calls.

![NPM Module](https://nodei.co/npm/console-emitter.png?stars=true)

![Build Status](https://api.travis-ci.org/Josiah/node-console-emitter.svg)
[![Coverage Status](https://img.shields.io/coveralls/Josiah/node-console-emitter.svg)](https://coveralls.io/r/Josiah/node-console-emitter)

## Usage

The `Console` class is implements the same interface as the [NodeJS console API](http://nodejs.org/api/console.html). Each console method is emitted as an event with the same name.

```js
var Console = require('console-emitter');

var console = new Console();

console.on('log', logme);
console.log('1', '2', '3');
function logme(one, two, three) {
  global.console.log(' one:', one);
  global.console.log(' two:', two);
  global.console.log(' three:', three);
}
// Prints
//  one: 1
//  two: 2
//  three: 3
```
