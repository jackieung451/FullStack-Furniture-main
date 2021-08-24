<<<<<<< HEAD
/*global jQuery:false*/
'use strict';
=======
/*global django:true, jQuery:false*/
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
/* Puts the included jQuery into our own namespace using noConflict and passing
 * it 'true'. This ensures that the included jQuery doesn't pollute the global
 * namespace (i.e. this preserves pre-existing values for both window.$ and
 * window.jQuery).
 */
<<<<<<< HEAD
window.django = {jQuery: jQuery.noConflict(true)};
=======
var django = django || {};
django.jQuery = jQuery.noConflict(true);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
