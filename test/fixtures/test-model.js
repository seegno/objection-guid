
/**
 * Module dependencies.
 */

import { Model } from 'objection';
import { guid } from '';

/**
 * Export `TestModel`.
 */

export default class TestModel extends guid(Model) {

  /**
   * Table name.
   */

  static tableName = 'Test';
}
