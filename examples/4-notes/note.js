var Note = function (params) {
  this.id = params.id;
  this.title = params.title;
  this.body = params.body;
};

Note.prototype.$domElement = function () {
  return $(['<div class="note">',
              '<h3>',this.title,'</h3>',
              '<p>',this.body,'</p>',
             '</div>'].join(''));
};

Note.prototype.domElement = function () {
  return this.$domElement[0];
};

Note.prototype.render = function () {
  var $note = this.$domElement();
  return $('.notes').append($note);
};