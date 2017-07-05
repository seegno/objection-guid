
/**
 * Module dependencies.
 */

import uuid from 'uuid';

/**
 * Export `guid`
 */

export function guid(Model) {
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
}
