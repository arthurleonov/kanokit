var codepre = function() {
  var defaults = {
    codeContainer: '.js-markup',
    htmlbtn: '.js-button',
    closeIcon: '.js-close'
  };
  return {
    init: function (configuration) {
      if(typeof configuration === 'undefined')
      configuration = {};
      config = $.extend(true, defaults, configuration);
      codepre.toggle();
      codepre.closeCode();
    },
    toggle: function() {
      $(defaults.htmlbtn).on('click', function() {

        var tog = $(this).attr("data-class");
        var toggleVal = $("." + tog);

        $(defaults.codeContainer).filter('.active').each(function() {
          $(this).removeClass('active').fadeOut('fast');
        });

        if($(toggleVal).hasClass('active')) {
            $(toggleVal).removeClass('active').fadeOut('fast');
        } else {
          $(toggleVal).addClass('active').fadeIn('fast');
        }
      });
    },
    closeCode: function() {
      $(defaults.closeIcon).on('click', function(){
        $(defaults.codeContainer).removeClass('active').fadeOut('fast');
      });
    }

  };
}();
