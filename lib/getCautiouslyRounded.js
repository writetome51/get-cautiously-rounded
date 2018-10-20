"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
var isInteger_isFloat_1 = require("basic-data-handling/isInteger_isFloat");
var is_odd_is_even_1 = require("@writetome51/is-odd-is-even");
var get_right_of_decimal_1 = require("@writetome51/get-right-of-decimal");
var get_rounded_up_down_1 = require("@writetome51/get-rounded-up-down");
// Rounds more accurately than getRounded() when the number being rounded has just one
// digit to the right of the decimal and in many instances that digit is 5.  In all
// other cases, use getRounded().
// If num's whole number (to left of decimal) is even, and the fraction is .5, then num is
// rounded toward zero.
// If num's whole number is odd, and fraction is .5, num is rounded away from zero.
function getCautiouslyRounded(num) {
    errorIfNotNumber_1.errorIfNotNumber(num);
    if (isInteger_isFloat_1.isFloat(num)) {
        var integerPart = num >> 0;
        var decimalPart = get_right_of_decimal_1.getRightOfDecimal(num);
        if (decimalPart === '5' && is_odd_is_even_1.isOdd(integerPart) && integerPart < 0) {
            return get_rounded_up_down_1.getRoundedDown(num);
        }
        else if (decimalPart === '5' && is_odd_is_even_1.isEven(integerPart)) {
            return integerPart;
        }
        else
            return get_rounded_up_down_1.getRounded(num);
    }
    else
        return num;
}
exports.getCautiouslyRounded = getCautiouslyRounded;
