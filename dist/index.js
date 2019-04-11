"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_finite_number_1 = require("error-if-not-finite-number");
var get_left_of_decimal_1 = require("@writetome51/get-left-of-decimal");
var get_right_of_decimal_1 = require("@writetome51/get-right-of-decimal");
var get_rounded_up_down_1 = require("@writetome51/get-rounded-up-down");
var is_integer_is_float_1 = require("@writetome51/is-integer-is-float");
var is_odd_is_even_1 = require("@writetome51/is-odd-is-even");
// Rounds more accurately than getRounded() when the number being rounded has just one
// digit to the right of the decimal and in many instances that digit is 5.  In all
// other cases, use getRounded().
// If num's whole number (to left of decimal) is even, and the fraction is .5, then num is
// rounded toward zero.
// If num's whole number is odd, and fraction is .5, num is rounded away from zero.
function getCautiouslyRounded(num) {
    error_if_not_finite_number_1.errorIfNotFiniteNumber(num);
    if (is_integer_is_float_1.isInteger(num))
        return num;
    var integerPart = get_left_of_decimal_1.getLeftOfDecimal(num);
    var decimalPart = get_right_of_decimal_1.getRightOfDecimal(num);
    if (decimalPart === '5' && is_odd_is_even_1.isOdd(integerPart) && integerPart < 0)
        return get_rounded_up_down_1.getRoundedDown(num);
    else if (decimalPart === '5' && is_odd_is_even_1.isEven(integerPart))
        return integerPart;
    else
        return get_rounded_up_down_1.getRounded(num);
}
exports.getCautiouslyRounded = getCautiouslyRounded;
