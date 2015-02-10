module('test the secret message button', {
  setup: function () {
    this.message = 'This is a secret message.';
    bindClickEventToShowMessageButton();
  }
});

test('the DIV should start out empty', function (assert) {
  assert.strictEqual($('.message').text(), '', 'Starts out empty.');
});

test('clicking on the button shows the secret message', function (assert) {
  $('.show-message').click();
  assert.strictEqual($('.message').text(), this.message, 'It has a message now.');
});

test('Qunit should reset fixtures after each test', function (assert) {
  assert.strictEqual('', $('.message').text(), 'The messages DIV should be empty again.');
  $('.show-message').click();
  assert.strictEqual($('.message').text(), this.message, 'It has a message again.');
});

module('test the hide message button', {
  setup: function () {
    bindClickEventToHideMessageButton();
  }
});

test('clicking on the hide message button, um, hides the message', function (assert) {
  $('.message').text('This should go away');
  $('.hide-message').click();
  assert.strictEqual($('.message').text(), '', 'The message should be gone!');
});