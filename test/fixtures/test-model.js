'use strict';

/**
 * Module dependencies.
 */

const Model = require('objection').Model;
const guid = require('../../index');

/**
 * Export `TestModel`.
 */

module.exports = class TestModel extends guid(Model) {

  /**
   * Table name.
   */

  static get tableName() {
    return 'Test';
  }
};
