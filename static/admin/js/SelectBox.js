<<<<<<< HEAD
'use strict';
{
    const SelectBox = {
        cache: {},
        init: function(id) {
            const box = document.getElementById(id);
            SelectBox.cache[id] = [];
            const cache = SelectBox.cache[id];
            for (const node of box.options) {
=======
(function($) {
    'use strict';
    var SelectBox = {
        cache: {},
        init: function(id) {
            var box = document.getElementById(id);
            var node;
            SelectBox.cache[id] = [];
            var cache = SelectBox.cache[id];
            var boxOptions = box.options;
            var boxOptionsLength = boxOptions.length;
            for (var i = 0, j = boxOptionsLength; i < j; i++) {
                node = boxOptions[i];
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                cache.push({value: node.value, text: node.text, displayed: 1});
            }
        },
        redisplay: function(id) {
            // Repopulate HTML select box from cache
<<<<<<< HEAD
            const box = document.getElementById(id);
            const scroll_value_from_top = box.scrollTop;
            box.innerHTML = '';
            for (const node of SelectBox.cache[id]) {
                if (node.displayed) {
                    const new_option = new Option(node.text, node.value, false, false);
                    // Shows a tooltip when hovering over the option
                    new_option.title = node.text;
                    box.appendChild(new_option);
                }
            }
            box.scrollTop = scroll_value_from_top;
=======
            var box = document.getElementById(id);
            var node;
            $(box).empty(); // clear all options
            var new_options = box.outerHTML.slice(0, -9); // grab just the opening tag
            var cache = SelectBox.cache[id];
            for (var i = 0, j = cache.length; i < j; i++) {
                node = cache[i];
                if (node.displayed) {
                    var new_option = new Option(node.text, node.value, false, false);
                    // Shows a tooltip when hovering over the option
                    new_option.setAttribute("title", node.text);
                    new_options += new_option.outerHTML;
                }
            }
            new_options += '</select>';
            box.outerHTML = new_options;
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
        },
        filter: function(id, text) {
            // Redisplay the HTML select box, displaying only the choices containing ALL
            // the words in text. (It's an AND search.)
<<<<<<< HEAD
            const tokens = text.toLowerCase().split(/\s+/);
            for (const node of SelectBox.cache[id]) {
                node.displayed = 1;
                const node_text = node.text.toLowerCase();
                for (const token of tokens) {
                    if (!node_text.includes(token)) {
=======
            var tokens = text.toLowerCase().split(/\s+/);
            var node, token;
            var cache = SelectBox.cache[id];
            for (var i = 0, j = cache.length; i < j; i++) {
                node = cache[i];
                node.displayed = 1;
                var node_text = node.text.toLowerCase();
                var numTokens = tokens.length;
                for (var k = 0; k < numTokens; k++) {
                    token = tokens[k];
                    if (node_text.indexOf(token) === -1) {
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                        node.displayed = 0;
                        break; // Once the first token isn't found we're done
                    }
                }
            }
            SelectBox.redisplay(id);
        },
        delete_from_cache: function(id, value) {
<<<<<<< HEAD
            let delete_index = null;
            const cache = SelectBox.cache[id];
            for (const [i, node] of cache.entries()) {
=======
            var node, delete_index = null;
            var cache = SelectBox.cache[id];
            for (var i = 0, j = cache.length; i < j; i++) {
                node = cache[i];
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                if (node.value === value) {
                    delete_index = i;
                    break;
                }
            }
            cache.splice(delete_index, 1);
        },
        add_to_cache: function(id, option) {
            SelectBox.cache[id].push({value: option.value, text: option.text, displayed: 1});
        },
        cache_contains: function(id, value) {
            // Check if an item is contained in the cache
<<<<<<< HEAD
            for (const node of SelectBox.cache[id]) {
=======
            var node;
            var cache = SelectBox.cache[id];
            for (var i = 0, j = cache.length; i < j; i++) {
                node = cache[i];
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                if (node.value === value) {
                    return true;
                }
            }
            return false;
        },
        move: function(from, to) {
<<<<<<< HEAD
            const from_box = document.getElementById(from);
            for (const option of from_box.options) {
                const option_value = option.value;
=======
            var from_box = document.getElementById(from);
            var option;
            var boxOptions = from_box.options;
            var boxOptionsLength = boxOptions.length;
            for (var i = 0, j = boxOptionsLength; i < j; i++) {
                option = boxOptions[i];
                var option_value = option.value;
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                if (option.selected && SelectBox.cache_contains(from, option_value)) {
                    SelectBox.add_to_cache(to, {value: option_value, text: option.text, displayed: 1});
                    SelectBox.delete_from_cache(from, option_value);
                }
            }
            SelectBox.redisplay(from);
            SelectBox.redisplay(to);
        },
        move_all: function(from, to) {
<<<<<<< HEAD
            const from_box = document.getElementById(from);
            for (const option of from_box.options) {
                const option_value = option.value;
=======
            var from_box = document.getElementById(from);
            var option;
            var boxOptions = from_box.options;
            var boxOptionsLength = boxOptions.length;
            for (var i = 0, j = boxOptionsLength; i < j; i++) {
                option = boxOptions[i];
                var option_value = option.value;
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                if (SelectBox.cache_contains(from, option_value)) {
                    SelectBox.add_to_cache(to, {value: option_value, text: option.text, displayed: 1});
                    SelectBox.delete_from_cache(from, option_value);
                }
            }
            SelectBox.redisplay(from);
            SelectBox.redisplay(to);
        },
        sort: function(id) {
            SelectBox.cache[id].sort(function(a, b) {
                a = a.text.toLowerCase();
                b = b.text.toLowerCase();
<<<<<<< HEAD
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
=======
                try {
                    if (a > b) {
                        return 1;
                    }
                    if (a < b) {
                        return -1;
                    }
                }
                catch (e) {
                    // silently fail on IE 'unknown' exception
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
                }
                return 0;
            } );
        },
        select_all: function(id) {
<<<<<<< HEAD
            const box = document.getElementById(id);
            for (const option of box.options) {
                option.selected = true;
=======
            var box = document.getElementById(id);
            var boxOptions = box.options;
            var boxOptionsLength = boxOptions.length;
            for (var i = 0; i < boxOptionsLength; i++) {
                boxOptions[i].selected = 'selected';
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
            }
        }
    };
    window.SelectBox = SelectBox;
<<<<<<< HEAD
}
=======
})(django.jQuery);
>>>>>>> 0fae261fed583391b8fa4374bf2b1eb1d844b200
