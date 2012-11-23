/**
 * Main
 *
 * @author Christian Johansson <christian@cvj.se>
 * @namespace main_
 */

/**
 * Fail Limit
 */
 var main_fail_limit = 2000;

/**
 * Loading
 */
 var main_loading = false;

/**
 * Loading Timer
 *
 * @var {Object}
 */
 var main_loadingTimer;

/**
 * Log
 *
 * @param {String} message
 */
function main_log(message)
{
    $('#status').append('<p>' + message + '</p>');
}

/**
 * Log Success
 *
 * @param {String} message
 */
function main_log_success(message)
{
    main_log('<span style="color: green; ">' + message + '</span>');
}

/**
 * Log Error
 *
 * @param {String} message
 */
function main_log_error(message)
{
    main_log('<span style="color: red; ">' + message + '</span>');
}


/**
 * Tests
 */
function main_tests()
{

    main_log('Running tests..');
    main_log('Running test 1..');
    main_test1();

}

/**
 * Test1
 */
function main_test1()
{
    main_getScript('tests/test1/script.js', 'test1_function');

    requireOnce({ css: 'tests/test1/style.css' }, function() {
        main_log_success('Style loaded');
    });
}

/**
 * Failed Loading
 *
 * @param {String} script
 * @param {String} functionName
 */
function main_failedLoading(script, functioName)
{
    if (main_loading) {
        main_log_error('Failed to trigger loading-completed event for "' + script + '"');
    }
    main_assertFunctionExists(functioName);
}

/**
 * Get Script
 *
 * @param {String} script
 * @param {String} assertFunction
 */
function main_getScript(script, assertFunction)
{
    main_loading = true;
    main_loadingTimer = setTimeout(function() { main_failedLoading(script, assertFunction); }, main_fail_limit);
    requireOnce({ js: script }, function()
    {
        main_loading = false;
        window.clearTimeout(main_loadingTimer);
        main_assertFunctionExists(assertFunction);
    });

}

/**
 * Assert Function Exists
 *
 * @param {String} functionName
 */
function main_assertFunctionExists(functionName)
{
    if (eval("typeof(window." + functionName + ") != 'undefined'")) {

        main_log_success('Function "' + functionName + '" is loaded');

        returnValue = eval("window." + functionName + "()");

        main_log_success('Function "' + functionName + '" returns "' + returnValue + '"');

    } else {
        main_log_error('Function "' + functionName + '" is not loaded');
    }
}

/**
 * Document Ready
 */
$(document).ready(function()
{

    main_log('Script is loaded');

    main_tests();

});

