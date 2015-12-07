; (function ($) {
    $.fn.extend({
        ReplaceAnchorHrefs: function (options) {
            this.defaults = {
                lookFor: "",
                replaceWith: window.location.host,
                ignore: []
            };

            var settings = $.extend({}, this.defaults, options);

            var replace = function (object) {
                var getIndex = $(object).attr("href").indexOf(settings.lookFor);
                var count = 0;
                $(settings.ignore).each(function (index, obj) {
                    if ($(object).attr("href").indexOf(obj) >= 0) {
                        count++;
                    }
                });

                if (count == 0) {
                    if (getIndex >= 0) {
                        console && console.log($(object).attr("href"), "before");
                        if ($(object).attr("href").split(settings.lookFor)[1]) {
                            var redirecting = settings.replaceWith + $(object).attr("href").split(settings.lookFor)[1];
                        } else {
                            var prepend = $(object).attr("href").substr(0, $(object).attr("href").indexOf(settings.lookFor));
                            var redirecting = prepend + settings.replaceWith;
                        }
                        console && console.log(redirecting, "redirecting");
                        $(object).attr("href", redirecting);
                    }
                }
            };

            if ($(this[0]).is('a')) {
                return this.each(function (index, object) {
                    replace(object);
                });
            }
            else {
                return this.find('a').each(function (index, object) {
                    replace(object);
                });
            }

        }
    });
})(jQuery);
