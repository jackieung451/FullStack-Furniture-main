<<<<<<< HEAD
'use strict';
{
    const $ = django.jQuery;
    const init = function($element, options) {
        const settings = $.extend({
=======
(function($) {
    'use strict';
    var init = function($element, options) {
        var settings = $.extend({
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
            ajax: {
                data: function(params) {
                    return {
                        term: params.term,
<<<<<<< HEAD
                        page: params.page,
                        app_label: $element.data('app-label'),
                        model_name: $element.data('model-name'),
                        field_name: $element.data('field-name')
=======
                        page: params.page
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                    };
                }
            }
        }, options);
        $element.select2(settings);
    };

    $.fn.djangoAdminSelect2 = function(options) {
<<<<<<< HEAD
        const settings = $.extend({}, options);
        $.each(this, function(i, element) {
            const $element = $(element);
=======
        var settings = $.extend({}, options);
        $.each(this, function(i, element) {
            var $element = $(element);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
            init($element, settings);
        });
        return this;
    };

    $(function() {
        // Initialize all autocomplete widgets except the one in the template
        // form used when a new formset is added.
        $('.admin-autocomplete').not('[name*=__prefix__]').djangoAdminSelect2();
    });

    $(document).on('formset:added', (function() {
        return function(event, $newFormset) {
            return $newFormset.find('.admin-autocomplete').djangoAdminSelect2();
        };
    })(this));
<<<<<<< HEAD
}
=======
}(django.jQuery));
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
