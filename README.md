# Automatic guid for Objection.js

[![npm](https://img.shields.io/npm/v/objection-guid.svg?style=flat-square)](https://npmjs.org/package/objection-guid)
![node](https://img.shields.io/node/v/objection-guid.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/seegno/objection-guid/master.svg?style=flat-square)](https://travis-ci.org/seegno/objection-guid)
[![Coverage Status](https://img.shields.io/coveralls/seegno/objection-guid/master.svg?style=flat-square)](https://coveralls.io/github/seegno/objection-guid?branch=master)

This plugin adds an automatic guid to your [Objection.js](https://github.com/Vincit/objection.js/) models using the [uuid](https://github.com/kelektiv/node-uuid) package for guid generation.

## Installation

### NPM

```sh
npm i objection-guid
```

### Yarn

```sh
yarn add objection-guid
```

## Usage

### Generate guid

```js
// Import the plugin.
const guid = require('objection-guid')();
const Model = require('objection').Model;

// Mixin the plugin.
class Item extends guid(Model) {
  static get tableName() {
    return 'Item';
  }
}

const item = await Item.query().insert({
  name: 'foo'
});

console.log(item.id);
// bbbe64b0-61a3-11e7-879a-67bb027591aa
```

### Custom values

If your model already has a value for the configured field, the value is not overwritten.

## Options

**field:** Overrides the default field name of the generated guid. (Default: `id`)

**generateGuid:** Overrides the default function that generates a guid. This function can be a promise. (Default: generates UUIDs v4)

These options can be provided when instantiating the plugin:

```js
const guid = require('objection-guid')({
  field: 'foo',
  generateGuid: () => 'bar'
});
```

## Tests

Run the tests from the root directory:

```sh
npm test
```

You can find Jest documentation [here](https://facebook.github.io/jest/docs/getting-started.html).

## Contributing & Development

#### Contributing

Found a bug or want to suggest something? Take a look first on the current and closed [issues](https://github.com/seegno/objection-guid/issues). If it is something new, please [submit an issue](https://github.com/seegno/objection-guid/issues/new).

#### Develop

It will be awesome if you can help us evolve `objection-guid`. Want to help?

1. [Fork it](https://github.com/seegno/objection-guid).
2. `npm install`.
3. Hack away.
4. Run the tests: `npm test`.
5. Create a [Pull Request](https://github.com/seegno/objection-guid/compare).
