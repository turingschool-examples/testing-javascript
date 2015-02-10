var bindClickEventToShowMessageButton = function () {
  var $message = $('.message');
  $('.show-message').on('click', function () {
    if ($message.text()) {
      $message.text('');
    } else {
      $message.text('This is a secret message.');
    }
  });
};

var bindClickEventToHideMessageButton = function () {
  $('.hide-message').on('click', function () {
    $('.message').text('');
  });
};