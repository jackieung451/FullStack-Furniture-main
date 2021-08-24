<<<<<<< HEAD
'use strict';
{
    const $ = django.jQuery;
    const fields = $('#django-admin-prepopulated-fields-constants').data('prepopulatedFields');
=======
(function($) {
    'use strict';
    var fields = $('#django-admin-prepopulated-fields-constants').data('prepopulatedFields');
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
    $.each(fields, function(index, field) {
        $('.empty-form .form-row .field-' + field.name + ', .empty-form.form-row .field-' + field.name).addClass('prepopulated_field');
        $(field.id).data('dependency_list', field.dependency_list).prepopulate(
            field.dependency_ids, field.maxLength, field.allowUnicode
        );
    });
<<<<<<< HEAD
}
=======
})(django.jQuery);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
