'use strict';

/**
 * Module dependencies.
 */

const uuid = require('uuid');

/**
 * Export `guid`
 */

module.exports = Model => {
  return class GuidIdPlugin extends Model {

    /**
     * Before insert.
     */

    $beforeInsert(context) {
      const parent = super.$beforeInsert(context);

      return Promise.resolve(parent).then(() => {
        this.id = uuid.v1();
      });
    }
  };
};
