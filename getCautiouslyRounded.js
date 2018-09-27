"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isOdd_isEven_1 = require("@writetome51/number-analysis-basic/isOdd_isEven");
var getRightOfDecimal_1 = require("@writetome51/get-right-of-decimal/getRightOfDecimal");
var isInteger_isFloat_1 = require("basic-data-handling/isInteger_isFloat");
var getRounded_getRoundedDown_getRoundedUp_1 = require("@writetome51/get-rounded-up-down/getRounded_getRoundedDown_getRoundedUp");
// Rounds more accurately than getRounded() when the number being rounded has just one
// digit to the right of the decimal and in many instances that digit is 5.  In all
// other cases, use getRounded().
// If num's whole number (to left of decimal) is even, and the fraction is .5, then num is
// rounded toward zero.
// If num's whole number is odd, and fraction is .5, num is rounded away from zero.
function getCautiouslyRounded(num) {
    var integerPart = getRounded_getRoundedDown_getRoundedUp_1.getRoundedDown(num);
    var decimalPart; // keep this a string - prevents logic errors.
    if (isInteger_isFloat_1.isFloat(num)) {
        decimalPart = getRightOfDecimal_1.getRightOfDecimal(num);
    }
    if (decimalPart === '5' && isOdd_isEven_1.isOdd(integerPart) && integerPart < 0) {
        return getRounded_getRoundedDown_getRoundedUp_1.getRoundedDown(num);
    }
    else if (decimalPart === '5' && isOdd_isEven_1.isEven(integerPart)) {
        return integerPart;
    }
    else
        return getRounded_getRoundedDown_getRoundedUp_1.getRounded(num);
}
exports.getCautiouslyRounded = getCautiouslyRounded;
