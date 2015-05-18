var assert = chai.assert;

describe('Note', function () {
  before(function () {
    this.note = new Note({title: 'title', body: 'body'});
  });

  it('instantiates correctly', function () {
    assert.strictEqual(this.note.title, 'title', 'We set the note title from the params');
    assert.strictEqual(this.note.body, 'body', 'We set the note body from the params');
  });

  it('has methods to turn into a DOM element', function () {
    assert.ok(this.note.$domElement, 'We have a $domElement method');
    assert.ok(this.note.domElement, 'We have a domElement method');
  });

  it('places it into the .notes DIV', function () {
    var $notes = $('.notes');
    this.note.render();
    assert.strictEqual($notes.find('.note').length, 1, 'We put one note into the DOM');
  });
});
