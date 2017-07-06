'use strict';

/**
 * Module dependencies.
 */

const TestModel = require('./fixtures/test-model');

/**
 * Test `guid` plugin.
 */

describe('GuidIdPlugin', () => {
  let model;

  beforeEach(() => {
    model = new TestModel();
  });

  describe('$beforeInsert', () => {
    it('should add `id` properties to the model', () => {
      const parent = model.$beforeInsert();

      return Promise.resolve(parent).then(() => {
        expect(model).toEqual({ id: expect.any(String) });
      });
    });
  });
});
