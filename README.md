# getCautiouslyRounded(number): number

This function avoids cumulative rounding errors only by changing rounding rules in  
one area -- when the fraction part of `number` is .5

## Examples
```js
getCautiouslyRounded(2.5); // -->  2

getCautiouslyRounded(3.5); // -->  4

getCautiouslyRounded(-2.5); // -->  -2

getCautiouslyRounded(-3.5); // -->  -4

// In all other cases, it rounds the normal way you expect.

getCautiouslyRounded(2.7); // -->  3

getCautiouslyRounded(-2.7); // -->  -3

getCautiouslyRounded(3.2); // -->  3
```

## Installation
`npm i  @writetome51/get-cautiously-rounded`

## Loading
```js
import { getCautiouslyRounded }  from '@writetome51/get-cautiously-rounded';
```
