'use strict';

/**
 * Module dependencies.
 */

const uuid = require('uuid');

/**
 * Export `guid`.
 */

module.exports = options => {
  options = Object.assign({
    field: 'id',
    generateGuid: () => uuid.v4()
  }, options);

  return Model => {
    return class extends Model {

      /**
       * Before insert.
       */

      $beforeInsert(context) {
        const parent = super.$beforeInsert(context);
        if(this[options.field]) return

        return Promise.resolve(parent)
          .then(() => options.generateGuid(context))
          .then(guid => {
            this[options.field] = guid;
          });
      }
    };
  };
};
