// Sample Tests

import { expect } from 'chai';

import map from '../src';

describe('map', () => {
  it('should correctly map from one object to another with the mapping supplied', () => {
    const input = {
      a: 1,
      b: 2,
      c: 3
    };
    const mapping = {
      x: 'a',
      y: 'b',
      z: 'c'
    };

    expect(map(input, mapping)).to.eql({
      x: 1,
      y: 2,
      z: 3
    });
  });

  it('should add null when the key needed for the mapping is missing', () => {
    const input = {
      c: 3
    };
    const mapping = {
      x: 'a',
      y: 'b',
      z: 'c'
    };

    expect(map(input, mapping)).to.eql({
      x: null,
      y: null,
      z: 3
    });
  });

  it('should throw an error if input object is null', () => {
    expect(() => map(null, {})).to.throw(Error);
  });

  it('should throw an error if mapping is null', () => {
    expect(() => map({}, null)).to.throw(Error);
  });
});
