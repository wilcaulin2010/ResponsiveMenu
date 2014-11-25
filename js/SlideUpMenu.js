
/*
        SlideUpMenu
        Created by: Wilando Ron Caulin

*/

(function ($) {
    $(document).ready(function () {

        $.fn.SlideUpMenu = function (options) {
            var settings = $.extend({ dataheight: 100 }, options);

            var $this = $(this);
            $this.css("margin-top", "-" + settings.dataheight + "px");
            $this.css("cursor","pointer");

            $this.mouseenter(function () {
                $this.animate({
                    "margin-top": "0"
                });
            });

            $this.mouseleave(function () {
                $this.animate({
                    "margin-top": "-" + settings.dataheight + "px"
                });
            });
        };

    });
} (jQuery));
