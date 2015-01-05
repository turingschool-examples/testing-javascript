module('Note', {
  setup: function () {
    this.note = new Note({title: 'title', body: 'body'});
  }
});

test('it instantiates correctly', function (assert) {
  assert.strictEqual(this.note.title, 'title', 'We set the note title from the params');
  assert.strictEqual(this.note.body, 'body', 'We set the note body from the params');
});

test('it has methods to turn into a DOM element', function (assert) {
  assert.ok(this.note.$domElement, 'We have a $domElement method');
  assert.ok(this.note.domElement, 'We have a domElement method');
});

test('render places it into the .notes DIV', function (assert) {
  var $notes = $('.notes');
  this.note.render();
  assert.strictEqual($notes.find('.note').length, 1, 'We put one note into the DOM')
});