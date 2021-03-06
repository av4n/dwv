/**
 * @namespace Utils classes and functions.
 */
dwv.utils = dwv.utils || {};

/**
 * @function Capitalise the first letter of a string.
 */
dwv.utils.capitaliseFirstLetter = function(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
};
