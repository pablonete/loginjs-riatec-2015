import * as common from '../../utils/common';

describe('isEmpty function', function() {
    it('should return true if empty', function () {
        expect(common.isEmpty('')).toEqual(true);
        expect(common.isEmpty(undefined)).toEqual(true);
        expect(common.isEmpty(null)).toEqual(true);
    });

    it('should return false if filled', function () {
        expect(common.isEmpty('a')).toEqual(false);
    });
});

describe('sum function', function() {
    it('should return sum if both arguments are positive', function () {
        expect(common.sum(3, 4)).toEqual(7);
    });
    it('should return sum if any argument is negative', function () {
        expect(common.sum(-3, 4)).toEqual(1);
        expect(common.sum(3, -4)).toEqual(-1);
    });
    it('should return the other argument if any is zero', function () {
        expect(common.sum(0, 4)).toEqual(4);
        expect(common.sum(4, 0)).toEqual(4);
    });
    it('should throw if any argument is not a number', function () {
        expect(function() { common.sum('a', 4) })
          .toThrow(new Error('a is not a number'));
        expect(function() { common.sum('4', 4) })
          .toThrow(new Error('4 is not a number'));
    });
});

describe('write function', function() {
    it('should write on console', function () {
      var output;
      var writer = {
        log: function(text) {
          output = text;
        }
      };

      common.write("Hola", writer);
      
      expect(output).toEqual("Hola");
    });
});