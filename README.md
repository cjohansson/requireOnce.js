requireOnce
===========

Javascript library for on-demand loading of javascripts, stylesheets and markup.
Based on the Ensure library but rewritten and increased compatability with modern devices and browsers.
Tested on IE6, IE7, IE8, IE9, Safari, Chrome, Firefox, Opera.

Just include the script 'requireOnce.js' and it's ready to use.

// Require file 'css/my-style.css' once

requireOnce({ css: 'css/my-style.css' }, function() {
        alert('CSS is loaded');
});

// Require file 'js/my-script.js' once

requireOnce({ css: 'js/my-script.js' }, function() {
        alert('JavaScript is loaded');
});

// Require file 'html/my-html.html' once

requireOnce({ html: 'html/my-html.html' }, function() {
        alert('HTML is loaded');
});

// You can also require multiple at once like

requireOnce({ css: 'css/my-style.css', js: 'js/my-script.js', html: 'html/my-html.html' }, function() {
        alert('CSS and Javascript and HTML is loaded');
});

// or like this, hope you get the point

requireOnce({ css: ['css/my-style.css', 'css/my-style2.css'], js: ['js/my-script.js', 'js/my-script-2.js'], html: 'html/my-html.html' }, function() {
        alert('CSS and Javascript and HTML is loaded');
});
