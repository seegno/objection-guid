# Automatic guid id for Objection.js

[![npm](https://img.shields.io/npm/v/objection-guid-id.svg?style=flat-square)](https://npmjs.org/package/objection-guid-id)
![node](https://img.shields.io/node/v/objection-guid-id.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/seegno/objection-guid-id/master.svg?style=flat-square)](https://travis-ci.org/seegno/objection-guid-id)
[![Coverage Status](https://img.shields.io/coveralls/seegno/objection-guid-id/master.svg?style=flat-square)](https://coveralls.io/github/seegno/objection-guid-id?branch=master)

This plugin adds an automatic guid id to your [Objection.js](https://github.com/Vincit/objection.js/) models using the [uuid](https://github.com/kelektiv/node-uuid) package for guid generation.

## Installation

### NPM

```sh
npm i objection-guid-id
```

### Yarn

```sh
yarn add objection-guid-id
```

## Usage

### Generate guid id

```js
// Import the plugin.
const guid = require('objection-guid-id')();
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

## Tests

Run the tests from the root directory:

```sh
npm test
```

You can find Jest documentation [here](https://facebook.github.io/jest/docs/getting-started.html).

## Contributing & Development

#### Contributing

Found a bug or want to suggest something? Take a look first on the current and closed [issues](https://github.com/seegno/objection-guid-id/issues). If it is something new, please [submit an issue](https://github.com/seegno/objection-guid-id/issues/new).

#### Develop

It will be awesome if you can help us evolve `objection-guid-id`. Want to help?

1. [Fork it](https://github.com/seegno/objection-guid-id).
2. `npm install`.
3. Hack away.
4. Run the tests: `npm test`.
5. Create a [Pull Request](https://github.com/seegno/objection-guid-id/compare).
