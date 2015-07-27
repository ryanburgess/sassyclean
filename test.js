'use strict';
var test = require('tape');
var sassyclean = require('./index.js');

test('Test sassyclean function', function (t) {
  t.equal(sassyclean('modules', false), undefined, 'Pass');
  t.equal(sassyclean('modules', true), undefined, 'Pass');
  t.end();
});