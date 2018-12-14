# omap

[![npm](https://img.shields.io/npm/v/omap.svg)](https://www.npmjs.com/package/omap)
[![Build Status](https://travis-ci.org/pratishshr/omap.svg?branch=master)](https://travis-ci.org/pratishshr/omap)
[![npm](https://img.shields.io/npm/dt/omap.svg)](https://www.npmjs.com/package/omap)

> Simple object mapper for creating flat javascript objects.

## Description

Maps an object to a flat structure.
Map object keys from one key to another with the help of a mapping object.
Supports mapping of a nested object to a flat structure.

## Installation

### npm

```bash
npm install --save omap
```

### yarn

```bash
yarn add omap
```

## Usage

### Flat Structure

```js
import map from 'omap';

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
import map from 'omap';

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
