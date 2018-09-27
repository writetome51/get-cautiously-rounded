import { isEven, isOdd } from '@writetome51/number-analysis-basic/isOdd_isEven';
import { getRightOfDecimal} from '@writetome51/get-right-of-decimal/getRightOfDecimal';
import { isFloat } from 'basic-data-handling/isInteger_isFloat';
import { getRounded, getRoundedDown } 
	from '@writetome51/get-rounded-up-down/getRounded_getRoundedDown_getRoundedUp';


// Rounds more accurately than getRounded() when the number being rounded has just one
// digit to the right of the decimal and in many instances that digit is 5.  In all
// other cases, use getRounded().
// If num's whole number (to left of decimal) is even, and the fraction is .5, then num is
// rounded toward zero.
// If num's whole number is odd, and fraction is .5, num is rounded away from zero.

export function getCautiouslyRounded(num): number {
	let integerPart = getRoundedDown(num);
	let decimalPart: string; // keep this a string - prevents logic errors.
	if (isFloat(num)) {
		decimalPart = getRightOfDecimal(num);
	}
	if (decimalPart === '5' && isOdd(integerPart) && integerPart < 0) {
		return getRoundedDown(num);
	}
	else if (decimalPart === '5' && isEven(integerPart)) {
		return integerPart;
	}
	else return getRounded(num);
}
