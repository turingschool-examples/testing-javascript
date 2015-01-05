var assert = chai.assert;
var expect = chai.expect;
chai.should();

describe('Our test suite', function () {
  it('should work', function () {
    assert(true);
    expect(true).to.be.ok();
    true.should.be.ok();
  });
});

describe('isEven()', function () {
  it('should return true if a number is even', function () {
    assert(isEven(2));
    expect(isEven(2)).to.be.ok();
    isEven(2).should.be.ok();
  });

  it('should return false if a number is odd', function () {
    assert(!isEven(1));
    expect(isEven(1)).to.not.be.ok();
    isEven(1).should.not.be.ok();
  });

  it('should return true if negative number is even', function () {
    assert(isEven(-2));
    expect(isEven(-2)).to.be.ok();
    isEven(-2).should.be.ok();
  });

  it('should return true for zero', function () {
    assert(isEven(0));
    expect(isEven(0)).to.be.ok();
    isEven(0).should.be.ok();
  });
});

describe('isOdd()', function () {
  it('should return true if a number is odd', function () {
    assert(isOdd(1));
    isOdd(1).should.be.ok();
  });

  it('should return false if a number is even', function(){
    assert(!isOdd(2));
    isOdd(2).should.not.be.ok();
  });

  it('should return false for zero', function(){
    assert(!isOdd(0));
    isOdd(0).should.not.be.ok();
  });

  it('should return true for negative one', function () {
    assert(isOdd(-1));
    isOdd(-1).should.be.ok();
  });
});

describe('addTwo()', function () {
  it('should return four if given two', function(){
    assert.equal(4, addTwo(2));
    expect(addTwo(2)).to.equal(4).and.not.equal(2);
    addTwo(2).should.equal(4);
  });

  it('should return two if given zero', function(){
    assert.equal(2, addTwo(0));
    expect(addTwo(0)).to.equal(2);
    addTwo(0).should.equal(2);
  });

  it('should add two to a negative number', function () {
    assert.equal(0, addTwo(-2));
    expect(addTwo(-2)).to.equal(0);
    addTwo(-2).should.equal(0);
  });
});

describe('subtractThree()', function () {
  it('should return one if given four', function(){
    assert.equal(1, subtractThree(4));
    expect(subtractThree(4)).to.equal(1);
    subtractThree(4).should.equal(1);
  });
});