'use strict';

/**
 * Module dependencies.
 */

const Model = require('objection').Model;

/**
 * Export `TestModel`.
 */

module.exports = options => {
  const guid = require('../../index')(options);

  class TestModel extends guid(Model) {}

  return new TestModel();
};
