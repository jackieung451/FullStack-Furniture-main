/*global gettext*/
<<<<<<< HEAD
'use strict';
{
    window.addEventListener('load', function() {
        // Add anchor tag for Show/Hide link
        const fieldsets = document.querySelectorAll('fieldset.collapse');
        for (const [i, elem] of fieldsets.entries()) {
            // Don't hide if fields in this fieldset have errors
            if (elem.querySelectorAll('div.errors, ul.errorlist').length === 0) {
                elem.classList.add('collapsed');
                const h2 = elem.querySelector('h2');
                const link = document.createElement('a');
                link.id = 'fieldsetcollapser' + i;
                link.className = 'collapse-toggle';
                link.href = '#';
=======
(function() {
    'use strict';
    var closestElem = function(elem, tagName) {
        if (elem.nodeName === tagName.toUpperCase()) {
            return elem;
        }
        if (elem.parentNode.nodeName === 'BODY') {
            return null;
        }
        return elem.parentNode && closestElem(elem.parentNode, tagName);
    };

    window.addEventListener('load', function() {
        // Add anchor tag for Show/Hide link
        var fieldsets = document.querySelectorAll('fieldset.collapse');
        for (var i = 0; i < fieldsets.length; i++) {
            var elem = fieldsets[i];
            // Don't hide if fields in this fieldset have errors
            if (elem.querySelectorAll('div.errors').length === 0) {
                elem.classList.add('collapsed');
                var h2 = elem.querySelector('h2');
                var link = document.createElement('a');
                link.setAttribute('id', 'fieldsetcollapser' + i);
                link.setAttribute('class', 'collapse-toggle');
                link.setAttribute('href', '#');
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                link.textContent = gettext('Show');
                h2.appendChild(document.createTextNode(' ('));
                h2.appendChild(link);
                h2.appendChild(document.createTextNode(')'));
            }
        }
        // Add toggle to hide/show anchor tag
<<<<<<< HEAD
        const toggleFunc = function(ev) {
            if (ev.target.matches('.collapse-toggle')) {
                ev.preventDefault();
                ev.stopPropagation();
                const fieldset = ev.target.closest('fieldset');
=======
        var toggleFunc = function(ev) {
            if (ev.target.matches('.collapse-toggle')) {
                ev.preventDefault();
                ev.stopPropagation();
                var fieldset = closestElem(ev.target, 'fieldset');
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                if (fieldset.classList.contains('collapsed')) {
                    // Show
                    ev.target.textContent = gettext('Hide');
                    fieldset.classList.remove('collapsed');
                } else {
                    // Hide
                    ev.target.textContent = gettext('Show');
                    fieldset.classList.add('collapsed');
                }
            }
        };
<<<<<<< HEAD
        document.querySelectorAll('fieldset.module').forEach(function(el) {
            el.addEventListener('click', toggleFunc);
        });
    });
}
=======
        var inlineDivs = document.querySelectorAll('fieldset.module');
        for (i = 0; i < inlineDivs.length; i++) {
            inlineDivs[i].addEventListener('click', toggleFunc);
        }
    });
})();
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
