var assert =  chai.assert;

// Let's take a look at spies in the context of a real working jQuery applicaiton.
// We'll spy on $.ajax (which all other jQuery AJAX methods defer to) to make sure
// that we actually calling an AJAX method.

describe('NoteRepository', function () {

  // Before each test, we'll spy on $.ajax to see if it has been called.
  // We're also going to rip out the browser's AJAX functionality.
  // This will remove our reliance on any kind of server and allow us to
  // test our JavaScript application in a way that is completely divorced
  // from the server.

  beforeEach(function () {
    sinon.spy($, 'ajax');
    var requests = this.requests = [];
    this.xhr = sinon.useFakeXMLHttpRequest();
    this.xhr.onCreate = function (req) { requests.push(req); };
  });

  // When the browser fires an AJAX request, we'll grab it and put it in our
  // `requests` array. This will allow us to grab each request and make
  // assertions about it later.

  // After we're done, we're going to put everything back. We'll stop spying
  // on $.ajax and restore the browser's ability to fire off AJAX requests.

  // We'll also clear out the DOM after each test.

  afterEach(function () {
    $.ajax.restore();
    this.xhr.restore();
    $('notes').html('');
  });

  // If you look at the call, you'll see that NoteRepository.all() is an
  // abstraction that makes an AJAX call to the server's index action fetching
  // all of the notes. We want to test that it actually makes an AJAX call.

  it('#all makes an AJAX call to the server', function () {
    NoteRepository.all();
    assert($.ajax.calledOnce, 'We hit JQuery\'s AJAX method');
    assert.strictEqual(this.requests.length, 1, 'We made one AJAX request');
  });

  // So, we've verified than _an_ AJAX call was made, but we don't really know
  // anything about that AJAX requestion. But, in the `beforeEach` function,
  // we shoved all of the requests into an array for later inspection. Let's go
  // ahead and take a look at that request and make sure it's doing the thing.

  it('#all makes a GET request to /api/notes', function () {
    NoteRepository.all();
    var request = this.requests[0];
    assert.strictEqual(request.url, '/api/notes', 'We\'re hitting the right endpoint');
    assert.strictEqual(request.method, 'GET', 'We\'re firing the right method');
  });

  // Experiment: Go ahead and log the `request` object to the console. Are there
  // any other properties that might be useful to test?

});

// So, we can test that AJAX calls are made. We can even test what was in a
// given request. As of this exact moment in time, we can't respond to them.
// This can be problematic, because sometimes we need to test functionality
// that relies on making an AJAX call and then doing something with the
// response.

// It turns out, that we can use `sinon.fakeServer()` to catch the requests
// and then respond to them on our behalf. Again, the advantage of this is
// that we don't need to have the server running at all to test this code.
// If you're using Teaspon or something, that's not a big deal as running
// the server is pretty easy and not a big deal. But, Sinon also makes it
// easy for us to mock responses.

describe('fetchNotes()', function () {

  // This will remove AJAX from the browser and also provide us with a more
  // robust server that we can use to respond to requests.

  beforeEach(function () {
    this.server = sinon.fakeServer.create();
  });

  // And again: we're going to put everything done.

  afterEach(function () {
    this.server.restore();
    $('notes').html('');
  });

  it('appends some notes to the DOM', function () {

    // This is a mocked response from the server that we'll use later.
    // Server's will normal create a JSON string that jQuery then turns
    // back into a real JavaScript object. So, we'll mimic that behavior
    // with `JSON.stringify`.

    var notes = JSON.stringify([
      { id: 1, title: 'Hello World', body: 'This is a note' },
      { id: 2, title: 'Start a Bon Iver look-a-like club', body: 'I am a hipster' },
      { id: 3, title: 'Buy more apples', body: 'No, seriously, he ate three in about 10 minutes' }
    ]);

    // `fetchNotes()` is defined in our code. It's a function that leverages
    // `NoteRepository.all()` to fetch all the notes from the server and then
    // append them to the DOM.

    fetchNotes();

    // `this.server` is our fake server that we setup in the `beforeEach` hook.
    // We're going to get the first request and then respond to it. We'll use a
    // status code of 200 and set the Content-Type to "application/json".
    // Finally, we're going to set the body of the response to that mocked out
    // data we created a few lines up.

    // Food for thought: since we have control over the status code, this makes
    // really easy to set up the unhappy path by sending a 404 or a 500.

    this.server.requests[0].respond(200, { "Content-Type": "application/json" }, notes);

    // `fetchNotes` was just sitting there waiting for a response from the
    // server. When we responded to it by hand in the previous line, it went
    // ahead and did the thing. We can now test that our three notes are in the
    // DOM. We can also test that it put the right information into the DOM.

    assert.strictEqual($('.note').length, 3, 'It should append our three notes to the DOM');
    assert.strictEqual($('.note').first().find('h3').text(), 'Hello World', 'It has our note text.');
  });

});
