(function ($) {
    Drupal.ajax.prototype.commands.page_redirect = function(ajax, response, status) {
        window.location.href = response.url;
    }
})(jQuery);
