// libray
(function($) {
  $.fn.getNumbByPx = function(css) {
      var Css = $(this).css(css);
      var length = Css.length;
      var numb = Number(Css.slice(0, (length - 2)));
      return numb;
    },

    $.fn.disable = function() {
      return this.each(function() {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active")
        }
        $(this).addClass("disable");
      });
    },

    $.fn.active = function(s) {
      return this.each(function() {
        if ($(this).hasClass("disable")) {
          $(this).removeClass("disable");
        }
        if (s) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    }
}(jQuery));