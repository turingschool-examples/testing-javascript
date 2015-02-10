var bindClickEventToShowMessageButton = function () {
  $('.show-message').on('click', function () {
    $('.message').text('This is a secret message.');
  });
};

var bindClickEventToHideMessageButton = function () {
  $('.hide-message').on('click', function () {
    $('.message').text('');
  });
};