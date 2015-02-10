module('Test some even numbers');

test('isEven()', function() {
  ok(isEven(0));
  ok(isEven(2));
  ok(isEven(-4));
  ok(!isEven(1));
  ok(!isEven(-7));
});

module('Test some odd numbers');

test('isOdd()', function (assert) {
  assert.ok(isOdd(1), 'If one isn\'t odd, then I don\'t know what is.');
  assert.ok(isOdd(273), 'Go big or go home.');
  assert.ok(!isOdd(2), 'Come one, two is like the anti-odd-number.');
  assert.ok(isOdd(-301), 'Negative numbers work, right?');
});