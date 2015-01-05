module('Test some even numbers');

test('isEven()', function(assert) {
  assert.ok(isEven(0), 'Zero is an even number. Strange, right?');
  assert.ok(isEven(2), 'Two is like the textbook even number.');
  assert.ok(isEven(-4), 'Sub-zero even numbers.');
  assert.ok(!isEven(1), 'One is definitely not an even number.');
  assert.ok(!isEven(-7), 'Negative seven is prime, not even. Grow up.');
});

module('Test some odd numbers');

test('isOdd()', function (assert) {
  assert.ok(isOdd(1), 'If one isn\'t odd, then I don\'t know what is.');
  assert.ok(isOdd(273), 'Go big or go home.');
  assert.ok(!isOdd(2), 'Come one, two is like the anti-odd-number.');
  assert.ok(isOdd(-301), 'Negative numbers work, right?');
});