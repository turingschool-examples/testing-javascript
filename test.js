var assert = require('chai').assert;
var square = require('./implementation').square;

describe('square', function () {
  it('returns the square of a number', function () {
    var result = square(2);

    assert.equal(result, 4);
  });
});
