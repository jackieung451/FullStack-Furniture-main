/*global URLify*/
<<<<<<< HEAD
'use strict';
{
    const $ = django.jQuery;
=======
(function($) {
    'use strict';
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
    $.fn.prepopulate = function(dependencies, maxLength, allowUnicode) {
        /*
            Depends on urlify.js
            Populates a selected field with the values of the dependent fields,
            URLifies and shortens the string.
            dependencies - array of dependent fields ids
            maxLength - maximum length of the URLify'd string
            allowUnicode - Unicode support of the URLify'd string
        */
        return this.each(function() {
<<<<<<< HEAD
            const prepopulatedField = $(this);

            const populate = function() {
=======
            var prepopulatedField = $(this);

            var populate = function() {
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                // Bail if the field's value has been changed by the user
                if (prepopulatedField.data('_changed')) {
                    return;
                }

<<<<<<< HEAD
                const values = [];
=======
                var values = [];
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                $.each(dependencies, function(i, field) {
                    field = $(field);
                    if (field.val().length > 0) {
                        values.push(field.val());
                    }
                });
                prepopulatedField.val(URLify(values.join(' '), maxLength, allowUnicode));
            };

            prepopulatedField.data('_changed', false);
            prepopulatedField.on('change', function() {
                prepopulatedField.data('_changed', true);
            });

            if (!prepopulatedField.val()) {
                $(dependencies.join(',')).on('keyup change focus', populate);
            }
        });
    };
<<<<<<< HEAD
}
=======
})(django.jQuery);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
