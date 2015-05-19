var assert = chai.assert;

describe('test the secret message button', function () {
  before(function () {
    this.message = 'This is a secret message.';
    bindClickEventToShowMessageButton();
  });

  beforeEach(function () {
    $('.message').text('')
  });

  it('the DIV should start out empty', function () {
    assert.strictEqual($('.message').text(), '', 'Starts out empty.');
  });

  it('clicking on the button shows the secret message', function () {
    $('.show-message').click();
    assert.strictEqual($('.message').text(), this.message, 'It has a message now.');
  });

  it('Mocha should reset fixtures after each test', function () {
    assert.strictEqual('', $('.message').text(), 'The messages DIV should be empty again.');
    $('.show-message').click();
    assert.strictEqual($('.message').text(), this.message, 'It has a message again.');
  });
});
