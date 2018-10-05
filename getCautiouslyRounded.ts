import { isEven, isOdd } from '@writetome51/number-analysis-basic/isOdd_isEven';
import { getRightOfDecimal} from '@writetome51/get-right-of-decimal/getRightOfDecimal';
import { getRounded, getRoundedDown } 
	from '@writetome51/get-rounded-up-down/getRounded_getRoundedDown_getRoundedUp';
import {errorIfNotNumber} from 'basic-data-handling/errorIfNotNumber';
import {isFloat} from 'basic-data-handling/isInteger_isFloat';


// Rounds more accurately than getRounded() when the number being rounded has just one
// digit to the right of the decimal and in many instances that digit is 5.  In all
// other cases, use getRounded().
// If num's whole number (to left of decimal) is even, and the fraction is .5, then num is
// rounded toward zero.
// If num's whole number is odd, and fraction is .5, num is rounded away from zero.

export function getCautiouslyRounded(num): number {
	errorIfNotNumber(num);

	if (isFloat(num)){
		let integerPart = num >> 0;
		let decimalPart: string = getRightOfDecimal(num);

		if (decimalPart === '5' && isOdd(integerPart) && integerPart < 0) {
			return getRoundedDown(num);
		}
		else if (decimalPart === '5' && isEven(integerPart)) {
			return integerPart;
		}
		else return getRounded(num);
	}
	else return num;
}
