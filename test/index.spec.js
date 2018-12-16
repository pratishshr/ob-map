import { expect } from 'chai';

import { map, bulkMap } from '../src';

describe('ob-map', () => {
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

    it('should map data if nested path given', () => {
      const input = {
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

      expect(map(input, mapping)).to.eql({
        x: 1,
        y: 2
      });
    });

    it('should throw an error if input object is null', () => {
      expect(() => map(null, {})).to.throw(Error);
    });

    it('should throw an error if mapping is null', () => {
      expect(() => map({}, null)).to.throw(Error);
    });
  });

  describe('bulkMap', () => {
    it('should correctly map all the objects from one object to another with the mapping supplied', () => {
      const input = [
        {
          a: 1,
          b: 2,
          c: 3
        },
        {
          a: 3,
          b: 4,
          c: 5
        }
      ];
      const mapping = {
        x: 'a',
        y: 'b',
        z: 'c'
      };

      expect(bulkMap(input, mapping)).to.eql([
        {
          x: 1,
          y: 2,
          z: 3
        },
        {
          x: 3,
          y: 4,
          z: 5
        }
      ]);
    });

    it('should throw an error if input object is null', () => {
      expect(() => bulkMap(null, {})).to.throw(Error);
    });

    it('should throw an error if input object is undefined', () => {
      expect(() => bulkMap(undefined, {})).to.throw(Error);
    });

    it('should throw an error if input object is a string', () => {
      expect(() => bulkMap('Test', {})).to.throw(Error);
    });

    it('should throw an error if input object is a number', () => {
      expect(() => bulkMap(1, {})).to.throw(Error);
    });

    it('should throw an error if input object is an object', () => {
      expect(() => bulkMap({}, {})).to.throw(Error);
    });
  });
});
