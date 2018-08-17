'use strict';

/**
 * Jest mocks.
 */

jest.mock('uuid/v4', () => jest.fn(() => 'foobar'));

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

    it('should not update `id` property value and not call `generateGuid` if an `model.id` is already defined', () => {
      const generateGuid = jest.fn();
      const model = modelFactory({ generateGuid });
      const parent = model.$beforeInsert();

      model.id = 'foo';

      return Promise.resolve(parent).then(() => {
        expect(model).toEqual({ id: 'foo' });
      });
    });

    it('should not update custom property value and not call `generateGuid` if an property value is already defined', () => {
      const generateGuid = jest.fn();
      const model = modelFactory({
        field: 'foo',
        generateGuid
      });
      const parent = model.$beforeInsert();

      model.foo = 'bar';

      return Promise.resolve(parent).then(() => {
        expect(model).toEqual({ foo: 'bar' });
      });
    });

    it('should call `generateGuid` in the context of the entity', () => {
      function generateGuid() {
        return `${this.foo}-1`;
      }
      const model = modelFactory({
        generateGuid
      });
      const parent = model.$beforeInsert();

      model.foo = 'bar';

      return Promise.resolve(parent).then(() => {
        expect(model).toEqual({ foo: 'bar', id: 'bar-1' });
      });
    });
  });
});
