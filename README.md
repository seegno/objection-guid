# Automatic guid id for Objection.js

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
