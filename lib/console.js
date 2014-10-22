'use strict';

var EventEmitter = require('events').EventEmitter;
var Util = require('util');

var Console = module.exports = function Console() {
  EventEmitter.call(this);
};
Util.inherits(Console, EventEmitter);

Console.prototype.log = function () {
  this.emit.apply(this, [].concat.apply(['log'], arguments));
};

Console.prototype.info = function () {
  this.emit.apply(this, [].concat.apply(['info'], arguments));
};

Console.prototype.warn = function () {
  this.emit.apply(this, [].concat.apply(['warn'], arguments));
};

Console.prototype.error = function () {
  this.emit.apply(this, [].concat.apply(['error'], arguments));
};

Console.prototype.dir = function (value) {
  this.emit('dir', value);
};

Console.prototype.time = function (label) {
  this.emit('time', label);
};

Console.prototype.timeEnd = function (label) {
  this.emit('timeEnd', label);
};

Console.prototype.trace = function () {
  this.emit.apply(this, [].concat.apply(['trace'], arguments));
};

Console.prototype.assert = function () {
  this.emit.apply(this, [].concat.apply(['assert'], arguments));
};
