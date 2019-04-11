import { errorIfNotFiniteNumber } from 'error-if-not-finite-number';
import { getLeftOfDecimal } from '@writetome51/get-left-of-decimal';
import { getRightOfDecimal } from '@writetome51/get-right-of-decimal';
import { getRounded, getRoundedDown } from '@writetome51/get-rounded-up-down';
import { isInteger } from '@writetome51/is-integer-is-float';
import { isEven, isOdd } from '@writetome51/is-odd-is-even';


// Rounds more accurately than getRounded() when the number being rounded has just one
// digit to the right of the decimal and in many instances that digit is 5.  In all
// other cases, use getRounded().
// If num's whole number (to left of decimal) is even, and the fraction is .5, then num is
// rounded toward zero.
// If num's whole number is odd, and fraction is .5, num is rounded away from zero.

export function getCautiouslyRounded(num): number {

	errorIfNotFiniteNumber(num);
	if (isInteger(num)) return num;

	let integerPart = getLeftOfDecimal(num);
	let decimalPart: string = getRightOfDecimal(num);

	if (decimalPart === '5' && isOdd(integerPart) && integerPart < 0) return getRoundedDown(num);
	else if (decimalPart === '5' && isEven(integerPart)) return integerPart;
	else return getRounded(num);
}
