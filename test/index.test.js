'use strict';

/**
 * Jest mocks.
 */

jest.mock('uuid', () => ({ v4: jest.fn(() => 'foobar') }));

/**
 * Module dependencies.
 */

const modelFactory = require('./utils/model-factory');

/**
 * Test `guid` plugin.
 */

describe('GuidIdPlugin', () => {
  describe('$beforeInsert', () => {
    it('should add the `id` property to the model with the default value of generated guid', () => {
      const model = modelFactory();
      const parent = model.$beforeInsert();

      return Promise.resolve(parent).then(() => {
        expect(model).toEqual({ id: 'foobar' });
      });
    });

    it('should add the property provided as an option to the model', () => {
      const model = modelFactory({ field: 'foo' });
      const parent = model.$beforeInsert();

      return Promise.resolve(parent).then(() => {
        expect(model).toEqual({ foo: expect.any(String) });
      });
    });

    it('should add the `id` property to the model and set the value as the result of the `generateGuid` function provided as an option', () => {
      const model = modelFactory({ generateGuid: () => 'foo' });
      const parent = model.$beforeInsert();

      return Promise.resolve(parent).then(() => {
        expect(model).toEqual({ id: 'foo' });
      });
    });

    it('should add the property provided as option to the model and set the value as the result of the `generateGuid` function provided as an option', () => {
      const model = modelFactory({
        field: 'foo',
        generateGuid: () => new Promise(resolve => resolve('bar'))
      });

      const parent = model.$beforeInsert();

      return Promise.resolve(parent).then(() => {
        expect(model).toEqual({ foo: 'bar' });
      });
    });
  });
});
