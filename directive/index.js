'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
  this.typeSuffix = '.directive';
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createDirectiveFiles = function createDirectiveFiles() {
  this.generateSourceAndTest(
    'directive',
    'spec/directive',
    'directives/',
    '../unit/spec/directives/',
    this.dasherizedName + this.typeSuffix
  );
};
