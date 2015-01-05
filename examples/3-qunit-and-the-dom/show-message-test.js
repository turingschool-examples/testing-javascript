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