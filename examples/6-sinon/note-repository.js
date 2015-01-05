var $notes = $('.notes');
var $noteTitle = $('#note-title');
var $noteBody = $('#note-body');
var $submitNote = $('#submit-note');

var NoteRepository = {
  all: function () {
    return $.getJSON('/api/notes');
  },
  find: function (id) {
    return $.getJSON('/api/notes/' + id);
  },
  create: function (data) {
    return $.post('/api/notes', data);
  },
  update: function (id, data) {
    return $.ajax('/api/notes/' + id, { data: data, type: 'PUT' });
  },
  destroy: function (id) {
    return $.ajax('/api/notes/' + id, { type: 'DELETE' });
  }
};

var fetchNotes = function () {
  NoteRepository.all().then(function (notes) { notes.forEach(addNote); });
};

var addNote = function (note) {
  $notes.append(['<div class="note">',
                   '<h3>', note.title, '</h3>',
                   '<p>', note.body, '</p>',
                 '</div>'].join(''));
};

var createNote = function () {
  var title = $noteTitle.val(), body = $noteValue.val();
  NoteRepository.create({ title: title, body: body }).then(addNote);
};

var activateSubmissionButtonOnValidInput = function () {
  $submitNote.attr('disabled', !($noteTitle.val() && $noteBody.val()));
};

var createNoteOnSubmission = function () {
  $submitNote.on('click', createNote);
};

var toggleSubmission = function () {
  $noteTitle.add($noteBody).on('keyup', activateSubmissionButtonOnValidInput);
};

var init = function () {
  fetchNotes();
  createNoteOnSubmission();
  toggleSubmission();
};