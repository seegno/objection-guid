
/**
 * Module dependencies.
 */

import TestModel from 'test/fixtures/test-model';

/**
 * Test `guid` plugin.
 */

describe('GuidIdPlugin', () => {
  let model;

  beforeEach(() => {
    model = new TestModel();
  });

  describe('$beforeInsert', () => {
    it('should add `id` properties to the model', async () => {
      await model.$beforeInsert();

      expect(model).toEqual({ id: expect.any(String) });
    });
  });
});
