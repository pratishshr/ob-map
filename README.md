# ob-map

[![npm](https://img.shields.io/npm/v/ob-map.svg)](https://www.npmjs.com/package/ob-map)
[![Build Status](https://travis-ci.org/pratishshr/ob-map.svg?branch=master)](https://travis-ci.org/pratishshr/ob-map)
[![npm](https://img.shields.io/npm/dt/ob-map.svg)](https://www.npmjs.com/package/ob-map)

> Simple object mapper for creating flat javascript objects.

## Description

Maps an object to a flat structure.
Map object keys from one key to another with the help of a mapping object.
Supports mapping of a nested object to a flat structure.

## Installation

### npm

```bash
npm install --save ob-map
```

### yarn

```bash
yarn add ob-map
```

## Usage

### Flat Structure

```js
import map from 'ob-map';

map(
  {
    a: 1,
    b: 2
  },
  {
    y: 'a',
    z: 'b'
  }
);
// => {y: 1, z: 2}
```

### Nested Structure

```js
import map from 'ob-map';

const obj = {
  a: {
    b: {
      c: 1
    }
  },
  d: {
    e: 2
  }
};

const mapping = {
  x: 'a.b.c',
  y: 'd.e'
};

map(obj, mapping);
// => {x: 1, y: 2}
```
