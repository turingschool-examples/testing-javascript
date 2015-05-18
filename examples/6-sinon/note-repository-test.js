var assert =  chai.assert;

describe('NoteRepository', function () {
  beforeEach(function () {
    sinon.spy($, 'ajax');
    this.requests = [];
    this.xhr = sinon.useFakeXMLHttpRequest();
    this.xhr.onCreate = function (req) { this.requests.push(req); }.bind(this);
  });

  afterEach(function () {
    $.ajax.restore();
    this.xhr.restore();
  });

  it('#all makes an AJAX call to the server', function () {
    NoteRepository.all();
    assert($.ajax.calledOnce, 'We hit JQuery\'s AJAX method');
    assert.strictEqual(this.requests.length, 1, 'We made one AJAX request');
  });

  it('#all makes a GET request to /api/notes', function () {
    NoteRepository.all();
    var request = this.requests[0];
    assert.strictEqual(request.url, '/api/notes', 'We\'re hitting the right endpoint');
    assert.strictEqual(request.method, 'GET', 'We\'re firing the right method');
  });


});

describe('fetchNotes()', function () {
  beforeEach(function () {
    this.server = sinon.fakeServer.create();
  }),

  afterEach(function () {
    this.server.restore();
  });

  it('appends some notes to the DOM', function () {

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

});
