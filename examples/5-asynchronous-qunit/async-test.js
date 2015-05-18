var assert = chai.assert;

describe('Waiting for asynchronous code', function () {

  it('demonstrate mocha can do it', function (done) {
    setTimeout(function() {
      assert(true);
      done();
    }, 500);
  });

});
