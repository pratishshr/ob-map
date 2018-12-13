# ob-map

[![npm](https://img.shields.io/npm/v/ob-map.svg)](https://www.npmjs.com/package/ob-map)
[![Build Status](https://travis-ci.org/pratishshr/ob-map.svg?branch=master)](https://travis-ci.org/pratishshr/ob-map)
[![npm](https://img.shields.io/npm/dt/ob-map.svg)](https://www.npmjs.com/package/ob-map)

> Simple object mapper.

## Installation

```bash
npm install --save ob-map
```

```bash
yarn add ob-map
```

Map object keys from one key to another with the help of a mapping.

## Usage

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
