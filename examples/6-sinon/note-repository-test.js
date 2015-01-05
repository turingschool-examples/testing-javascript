module('Test that AJAX calls are made', {
  setup: function () {
    sinon.spy($, 'ajax');
    this.requests = [];
    this.xhr = sinon.useFakeXMLHttpRequest();
    this.xhr.onCreate = function (req) { this.requests.push(req); }.bind(this);
  },
  teardown: function () {
    $.ajax.restore();
    this.xhr.restore();
  }
});

test('#all makes an AJAX call to the server', function (assert) {
  NoteRepository.all();
  assert.ok($.ajax.calledOnce, 'We hit JQuery\'s AJAX method');
  assert.strictEqual(this.requests.length, 1, 'We made one AJAX request');
});

test('#all makes a GET request to /api/notes', function (assert) {
  NoteRepository.all();
  var request = this.requests[0];
  assert.strictEqual(request.url, '/api/notes', 'We\'re hitting the right endpoint');
  assert.strictEqual(request.method, 'GET', 'We\'re firing the right method');
});

module('Let\'s play with a fake server', {
  setup: function () {
    this.server = sinon.fakeServer.create();
  },
  teardown: function () {
    this.server.restore();
  }
});

test('fetchNotes() appends some notes to the DOM', function (assert) {

  var notes = JSON.stringify([
    { id: 1, title: 'Hello World', body: 'This is a note' },
    { id: 2, title: 'Start a Bon Iver look-a-like club', body: 'I am a hipster' },
    { id: 3, title: 'Buy more apples', body: 'No, seriously, he ate three in about 10 minutes' }
  ]);

  fetchNotes();

  this.server.requests[0].respond(200, { "Content-Type": "application/json" }, notes);

  assert.strictEqual($('.note').length, 3, 'It should append our three notes to the DOM');
  assert.strictEqual($('.note').first().find('h3').text(), 'Hello World', 'It has our note text.')
});