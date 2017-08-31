/**
 * @file
 * slide.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';

    $(document).ready(function(){
      
      $(window).scroll(function() {
        $(".slideanim").each(function(){
          var pos = $(this).offset().top;

          var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
              $(this).addClass("slide");
            }
        });
      });
    });
}(jQuery);