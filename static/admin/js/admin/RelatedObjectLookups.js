/*global SelectBox, interpolate*/
// Handles related-objects functionality: lookup link for raw_id_fields
// and Add Another links.
<<<<<<< HEAD
'use strict';
{
    const $ = django.jQuery;

    function showAdminPopup(triggeringLink, name_regexp, add_popup) {
        const name = triggeringLink.id.replace(name_regexp, '');
        const href = new URL(triggeringLink.href);
        if (add_popup) {
            href.searchParams.set('_popup', 1);
        }
        const win = window.open(href, name, 'height=500,width=800,resizable=yes,scrollbars=yes');
=======

(function($) {
    'use strict';

    // IE doesn't accept periods or dashes in the window name, but the element IDs
    // we use to generate popup window names may contain them, therefore we map them
    // to allowed characters in a reversible way so that we can locate the correct
    // element when the popup window is dismissed.
    function id_to_windowname(text) {
        text = text.replace(/\./g, '__dot__');
        text = text.replace(/\-/g, '__dash__');
        return text;
    }

    function windowname_to_id(text) {
        text = text.replace(/__dot__/g, '.');
        text = text.replace(/__dash__/g, '-');
        return text;
    }

    function showAdminPopup(triggeringLink, name_regexp, add_popup) {
        var name = triggeringLink.id.replace(name_regexp, '');
        name = id_to_windowname(name);
        var href = triggeringLink.href;
        if (add_popup) {
            if (href.indexOf('?') === -1) {
                href += '?_popup=1';
            } else {
                href += '&_popup=1';
            }
        }
        var win = window.open(href, name, 'height=500,width=800,resizable=yes,scrollbars=yes');
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
        win.focus();
        return false;
    }

    function showRelatedObjectLookupPopup(triggeringLink) {
        return showAdminPopup(triggeringLink, /^lookup_/, true);
    }

    function dismissRelatedLookupPopup(win, chosenId) {
<<<<<<< HEAD
        const name = win.name;
        const elem = document.getElementById(name);
        if (elem.classList.contains('vManyToManyRawIdAdminField') && elem.value) {
=======
        var name = windowname_to_id(win.name);
        var elem = document.getElementById(name);
        if (elem.className.indexOf('vManyToManyRawIdAdminField') !== -1 && elem.value) {
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
            elem.value += ',' + chosenId;
        } else {
            document.getElementById(name).value = chosenId;
        }
        win.close();
    }

    function showRelatedObjectPopup(triggeringLink) {
        return showAdminPopup(triggeringLink, /^(change|add|delete)_/, false);
    }

    function updateRelatedObjectLinks(triggeringLink) {
<<<<<<< HEAD
        const $this = $(triggeringLink);
        const siblings = $this.nextAll('.view-related, .change-related, .delete-related');
        if (!siblings.length) {
            return;
        }
        const value = $this.val();
        if (value) {
            siblings.each(function() {
                const elm = $(this);
=======
        var $this = $(triggeringLink);
        var siblings = $this.nextAll('.view-related, .change-related, .delete-related');
        if (!siblings.length) {
            return;
        }
        var value = $this.val();
        if (value) {
            siblings.each(function() {
                var elm = $(this);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                elm.attr('href', elm.attr('data-href-template').replace('__fk__', value));
            });
        } else {
            siblings.removeAttr('href');
        }
    }

    function dismissAddRelatedObjectPopup(win, newId, newRepr) {
<<<<<<< HEAD
        const name = win.name;
        const elem = document.getElementById(name);
        if (elem) {
            const elemName = elem.nodeName.toUpperCase();
            if (elemName === 'SELECT') {
                elem.options[elem.options.length] = new Option(newRepr, newId, true, true);
            } else if (elemName === 'INPUT') {
                if (elem.classList.contains('vManyToManyRawIdAdminField') && elem.value) {
=======
        var name = windowname_to_id(win.name);
        var elem = document.getElementById(name);
        if (elem) {
            var elemName = elem.nodeName.toUpperCase();
            if (elemName === 'SELECT') {
                elem.options[elem.options.length] = new Option(newRepr, newId, true, true);
            } else if (elemName === 'INPUT') {
                if (elem.className.indexOf('vManyToManyRawIdAdminField') !== -1 && elem.value) {
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                    elem.value += ',' + newId;
                } else {
                    elem.value = newId;
                }
            }
            // Trigger a change event to update related links if required.
            $(elem).trigger('change');
        } else {
<<<<<<< HEAD
            const toId = name + "_to";
            const o = new Option(newRepr, newId);
=======
            var toId = name + "_to";
            var o = new Option(newRepr, newId);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
            SelectBox.add_to_cache(toId, o);
            SelectBox.redisplay(toId);
        }
        win.close();
    }

    function dismissChangeRelatedObjectPopup(win, objId, newRepr, newId) {
<<<<<<< HEAD
        const id = win.name.replace(/^edit_/, '');
        const selectsSelector = interpolate('#%s, #%s_from, #%s_to', [id, id, id]);
        const selects = $(selectsSelector);
=======
        var id = windowname_to_id(win.name).replace(/^edit_/, '');
        var selectsSelector = interpolate('#%s, #%s_from, #%s_to', [id, id, id]);
        var selects = $(selectsSelector);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
        selects.find('option').each(function() {
            if (this.value === objId) {
                this.textContent = newRepr;
                this.value = newId;
            }
        });
        selects.next().find('.select2-selection__rendered').each(function() {
            // The element can have a clear button as a child.
            // Use the lastChild to modify only the displayed value.
            this.lastChild.textContent = newRepr;
            this.title = newRepr;
        });
        win.close();
    }

    function dismissDeleteRelatedObjectPopup(win, objId) {
<<<<<<< HEAD
        const id = win.name.replace(/^delete_/, '');
        const selectsSelector = interpolate('#%s, #%s_from, #%s_to', [id, id, id]);
        const selects = $(selectsSelector);
=======
        var id = windowname_to_id(win.name).replace(/^delete_/, '');
        var selectsSelector = interpolate('#%s, #%s_from, #%s_to', [id, id, id]);
        var selects = $(selectsSelector);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
        selects.find('option').each(function() {
            if (this.value === objId) {
                $(this).remove();
            }
        }).trigger('change');
        win.close();
    }

<<<<<<< HEAD
=======
    // Global for testing purposes
    window.id_to_windowname = id_to_windowname;
    window.windowname_to_id = windowname_to_id;

>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
    window.showRelatedObjectLookupPopup = showRelatedObjectLookupPopup;
    window.dismissRelatedLookupPopup = dismissRelatedLookupPopup;
    window.showRelatedObjectPopup = showRelatedObjectPopup;
    window.updateRelatedObjectLinks = updateRelatedObjectLinks;
    window.dismissAddRelatedObjectPopup = dismissAddRelatedObjectPopup;
    window.dismissChangeRelatedObjectPopup = dismissChangeRelatedObjectPopup;
    window.dismissDeleteRelatedObjectPopup = dismissDeleteRelatedObjectPopup;

    // Kept for backward compatibility
    window.showAddAnotherPopup = showRelatedObjectPopup;
    window.dismissAddAnotherPopup = dismissAddRelatedObjectPopup;

    $(document).ready(function() {
        $("a[data-popup-opener]").on('click', function(event) {
            event.preventDefault();
            opener.dismissRelatedLookupPopup(window, $(this).data("popup-opener"));
        });
        $('body').on('click', '.related-widget-wrapper-link', function(e) {
            e.preventDefault();
            if (this.href) {
<<<<<<< HEAD
                const event = $.Event('django:show-related', {href: this.href});
=======
                var event = $.Event('django:show-related', {href: this.href});
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                $(this).trigger(event);
                if (!event.isDefaultPrevented()) {
                    showRelatedObjectPopup(this);
                }
            }
        });
        $('body').on('change', '.related-widget-wrapper select', function(e) {
<<<<<<< HEAD
            const event = $.Event('django:update-related');
=======
            var event = $.Event('django:update-related');
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
            $(this).trigger(event);
            if (!event.isDefaultPrevented()) {
                updateRelatedObjectLinks(this);
            }
        });
        $('.related-widget-wrapper select').trigger('change');
        $('body').on('click', '.related-lookup', function(e) {
            e.preventDefault();
<<<<<<< HEAD
            const event = $.Event('django:lookup-related');
=======
            var event = $.Event('django:lookup-related');
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
            $(this).trigger(event);
            if (!event.isDefaultPrevented()) {
                showRelatedObjectLookupPopup(this);
            }
        });
    });
<<<<<<< HEAD
}
=======

})(django.jQuery);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
