'use strict';

/**
 * Module dependencies.
 */

const uuid = require('uuid/v4');

/**
 * Export `guid`.
 */

module.exports = options => {
  options = Object.assign(
    {
      field: 'id',
      generateGuid: () => uuid()
    },
    options
  );

  return Model => {
    return class extends Model {
      /**
       * Before insert.
       */

      $beforeInsert(context) {
        const parent = super.$beforeInsert(context);

        return Promise.resolve(parent)
          .then(
            () =>
              this[options.field] || options.generateGuid.call(this, context)
          )
          .then(guid => {
            this[options.field] = guid;
          });
      }
    };
  };
};
