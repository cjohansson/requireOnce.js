# requireOnce

Javascript library for *on-demand* loading of javascripts, stylesheets and markup.
Based on the **Ensure** library but rewritten and increased compatability with modern devices and browsers.
Tested on IE6, IE7, IE8, IE9, Safari, Chrome, Firefox, Opera.

The problem that requireOnce is trying to solve is to load resources on demand that are required on-demand. If a resource it required more than once during a run it won't be loaded twice. This makes it possible to exclude resources that are not neccesary and instead load them on demand to increase performance.

The only dependency for this library is one of the following:

    * jQuery
    * Microsoft ASP.NET AJAX
    * Prototype.

**One of them must be present for requireOnce to work.**

Just include the script `requireOnce.js` after any of the above and it's ready to use, ie before the closing `</body>` tag:

    <script type="text/javascript" src="requireOnce.js"></script>

## Examples

// Require file 'css/my-style.css' once

    requireOnce({ css: 'css/my-style.css' }, function() {
        alert('CSS my-style.css is loaded');
    });

// Require file 'js/my-script.js' once

    requireOnce({ js: 'js/my-script.js' }, function() {
        alert('JavaScript my-script.js is loaded');
    });

// Require file 'html/my-html.html' once

    requireOnce({ html: 'html/my-html.html' }, function() {
        alert('HTML my-html.html is loaded');
    });

// You can also require multiple at once like

    requireOnce({ css: 'css/my-style.css', js: 'js/my-script.js', html: 'html/my-html.html' }, function() {
        alert('CSS my-style.css and Javascript my-script.js and HTML my-html.html is loaded');
    });

// or like this, hope you get the point

    requireOnce({ css: ['css/my-style.css', 'css/my-style2.css'], js: ['js/my-script.js', 'js/my-script-2.js'], html: 'html/my-html.html' }, function() {
        alert('CSS my-style.css, my-style2.css and Javascript my-script.js, my-script-2.js and HTML my-html is loaded');
    });
