'use strict';

var Lab = require('lab');
var Console = require('../lib/console');

var lab = exports.lab = Lab.script();

lab.experiment('Console', function () {
  var console;

  lab.before(function (next) {
    console = new Console();
    next();
  });

  lab.experiment('log()', function () {
    lab.test("emits 'log' event", function (next) {
      console.once('log', function (one, two, three) {
        Lab.expect(one, 'argument one').to.equal(1);
        Lab.expect(two, 'argument two').to.equal('two');
        Lab.expect(three, 'argument three').to.eql({three: true});
      });
      console.log(1, 'two', {three: true});
      next();
    });
  });

  lab.experiment('info()', function () {
    lab.test("emits 'info' event", function (next) {
      console.once('info', function (one, two, three) {
        Lab.expect(one, 'argument one').to.equal(1);
        Lab.expect(two, 'argument two').to.equal('two');
        Lab.expect(three, 'argument three').to.eql({three: true});
      });
      console.info(1, 'two', {three: true});
      next();
    });
  });

  lab.experiment('warn()', function () {
    lab.test("emits 'warn' event", function (next) {
      console.once('warn', function (one, two, three) {
        Lab.expect(one, 'argument one').to.equal(1);
        Lab.expect(two, 'argument two').to.equal('two');
        Lab.expect(three, 'argument three').to.eql({three: true});
      });
      console.warn(1, 'two', {three: true});
      next();
    });
  });

  lab.experiment('error()', function () {
    lab.test("emits 'error' event", function (next) {
      console.once('error', function (one, two, three) {
        Lab.expect(one, 'argument one').to.equal(1);
        Lab.expect(two, 'argument two').to.equal('two');
        Lab.expect(three, 'argument three').to.eql({three: true});
      });
      console.error(1, 'two', {three: true});
      next();
    });
  });

  lab.experiment('dir()', function () {
    lab.test("emits 'dir' event", function (next) {
      var obj = {};
      console.once('dir', function (obj) {
        Lab.expect(obj, 'object').to.equal(obj);
      });
      console.dir(obj);
      next();
    });
  });

  lab.experiment('time()', function () {
    lab.test("emits 'time' event", function (next) {
      console.once('time', function (label) {
        Lab.expect(label, 'label').to.equal('timer-123');
      });
      console.time('timer-123');
      next();
    });
  });

  lab.experiment('timeEnd()', function () {
    lab.test("emits 'timeEnd' event", function (next) {
      console.once('timeEnd', function (label) {
        Lab.expect(label, 'label').to.equal('timer-123');
      });
      console.timeEnd('timer-123');
      next();
    });
  });

  lab.experiment('trace()', function () {
    lab.test("emits 'trace' event", function (next) {
      console.once('trace', function (one, two, three) {
        Lab.expect(one, 'argument one').to.equal(1);
        Lab.expect(two, 'argument two').to.equal('two');
        Lab.expect(three, 'argument three').to.eql({three: true});
      });
      console.trace(1, 'two', {three: true});
      next();
    });
  });

  lab.experiment('assert()', function () {
    lab.test("emits 'assert' event", function (next) {
      console.once('assert', function (value, one, two, three) {
        Lab.expect(value, 'value').to.equal(true);
        Lab.expect(one, 'message one').to.equal(1);
        Lab.expect(two, 'message two').to.equal('two');
        Lab.expect(three, 'message three').to.eql({three: true});
      });
      console.assert(true, 1, 'two', {three: true});
      next();
    });
  });
});
