
/**
 * Module dependencies.
 */

import { guid } from '';
import { Model } from 'objection';

/**
 * Export `TestModel`.
 */

export default class TestModel extends guid(Model) {

  /**
   * Table name.
   */

  static tableName = 'Test';
}
