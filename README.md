# getCautiouslyRounded(number): number

This function avoids cumulative rounding errors only by changing rounding rules in 
one area -- when the fraction part of the number is .5

## Examples
```
getCautiouslyRounded(2.5) -->  2

getCautiouslyRounded(3.5) -->  4

getCautiouslyRounded(-2.5) -->  -2

getCautiouslyRounded(-3.5) -->  -4

// In all other cases, it rounds the normal way you expect.

getCautiouslyRounded(2.7) -->  3

getCautiouslyRounded(-2.7) -->  -3

getCautiouslyRounded(3.2) -->  3
```

## Installation
`npm i  @writetome51/get-cautiously-rounded`

## Loading
```ts
// if using TypeScript:
import { getCautiouslyRounded }  from '@writetome51/get-cautiously-rounded';
    
// if using ES5 JavaScript:
var getCautiouslyRounded = 
	require('@writetome51/get-cautiously-rounded').getCautiouslyRounded;
```
