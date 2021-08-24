/*global opener */
<<<<<<< HEAD
'use strict';
{
    const initData = JSON.parse(document.getElementById('django-admin-popup-response-constants').dataset.popupResponse);
=======
(function() {
    'use strict';
    var initData = JSON.parse(document.getElementById('django-admin-popup-response-constants').dataset.popupResponse);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
    switch(initData.action) {
    case 'change':
        opener.dismissChangeRelatedObjectPopup(window, initData.value, initData.obj, initData.new_value);
        break;
    case 'delete':
        opener.dismissDeleteRelatedObjectPopup(window, initData.value);
        break;
    default:
        opener.dismissAddRelatedObjectPopup(window, initData.value, initData.obj);
        break;
    }
<<<<<<< HEAD
}
=======
})();
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
