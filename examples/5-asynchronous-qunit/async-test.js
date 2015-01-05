module('Waiting for asynchronous code');

test('demonstrate Qunit can do it', function (assert) {
  var done = assert.async();
  setTimeout(function() {
    assert.ok(true);
    done();
  }, 500);
});

module('Multiple callbacks');

test('wait for multiple callbacks', function (assert) {
  assert.expect(3);

  var done1 = assert.async();
  var done2 = assert.async();
  var done3 = assert.async();

  setTimeout(function() {
    assert.ok(true);
    done1();
  }, 500);

  setTimeout(function() {
    assert.ok(true);
    done2();
  }, 500);

  setTimeout(function() {
    assert.ok(true);
    done3();
  }, 500);
});