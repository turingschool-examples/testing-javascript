module('Add two to some numbers');

test('COERCION FAIL', function (assert) {
  assert.equal('2', 2, 'This is not really what wanted.');
  assert.notStrictEqual('2', 2, 'Much better.');
  assert.strictEqual(addTwo(2), 4, 'Two plus two equals four.');
});

// See what else Qunit has to offer: http://api.qunitjs.com/category/assert/

test('addTwo()', function (assert) {
  assert.strictEqual(addTwo(4), 6, 'We can have multiple tests per module.');
  assert.notStrictEqual(addTwo(4), 4, 'I fell asleep during math class.');
});

module('Subtraction is important too');

test('subtractThree()', function (assert) {
  assert.strictEqual(subtractThree(0), -3, 'Half of a half-dozen');
  assert.strictEqual(subtractThree(6), 3, 'But, everything means less than zero.');
});