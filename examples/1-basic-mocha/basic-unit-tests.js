var assert = chai.assert;

describe('isEven()', function () {
  it('Zero is an even number. Strange, right?', function () {
    assert(isEven(0));
  });

  it('Two is like the textbook even number.', function () {
    assert(isEven(2));
  });

  it('Sub-zero even numbers.', function () {
    assert(isEven(-4));
  });

  it('One is definitely not an even number.', function () {
    assert(!isEven(1));
  });

  it('Negative seven is prime, not even. Grow up.', function () {
    assert(!isEven(-7));
  });
});

describe('isOdd()', function () {
  it('If one isn\'t odd, then I don\'t know what is.', function () {
    assert(isOdd(1));
  });

  it('Go big or go home.', function () {
    assert(isOdd(273));
  });

  it('Come one, two is like the anti-odd-number.', function () {
    assert(!isOdd(2));
  });

  it('Negative numbers work, right?', function () {
    assert(isOdd(-301));
  });
});
