'use strict';

/**
 * Module dependencies.
 */

const uuid = require('uuid/v4');

const fromBinaryUUID = function(buf) {
  return [
    buf.toString("hex", 4, 8),
    buf.toString("hex", 2, 4),
    buf.toString("hex", 0, 2),
    buf.toString("hex", 8, 10),
    buf.toString("hex", 10, 16),
  ].join("-");
};

const toBinaryUUID = function(uuid) {
  const buf = Buffer.from(uuid.replace(/-/g, ""), "hex");
  return Buffer.concat([
    buf.slice(6, 8),
    buf.slice(4, 6),
    buf.slice(0, 4),
    buf.slice(8, 16),
  ]);
};

/**
 * Export `guid`.
 */

module.exports = options => {
  options = Object.assign(
    {
      field: 'id',
      useBinary: false,
      generateGuid: () => uuid()
    },
    options
  );

  return Model => {
    return class extends Model {
      
      /**
       * After find.
       */

      $afterFind(context) {
        const parent = super.$afterFind(context);

        return Promise.resolve(parent)
          .then(() => {
            if ( options.useBinary ) {            
              this[options.field] = fromBinaryUUID(this[options.field]);
            }
          });

      }
      
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
            if ( options.useBinary ) {
              guid = toBinaryUUID(guid)
            }
            
            this[options.field] = guid;
          });
      }
    };
  };
};
