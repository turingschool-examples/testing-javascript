var assert = chai.assert;

describe('COERCION FAIL', function () {
  it('This is not really what wanted.', function () {
    assert.equal('2', 2);
  });

  it('Much better.', function () {
    assert.notStrictEqual('2', 2);
  });

  it('Two plus two equals four.', function () {
    assert.strictEqual(addTwo(2), 4);
  });
});

describe('addTwo()', function () {
  it('We can have multiple describes per module.', function () {
    assert.strictEqual(addTwo(4), 6);
  });

  it('I fell asleep during math class.', function () {
    assert.notStrictEqual(addTwo(4), 4);
  });
});

describe('subtractThree()', function () {
  it('Half of a half-dozen', function () {
    assert.strictEqual(subtractThree(0), -3);
  });

  it('But, everything means less than zero.', function () {
    assert.strictEqual(subtractThree(6), 3);
  });
});
