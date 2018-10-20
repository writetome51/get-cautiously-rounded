getCautiouslyRounded()

This function avoids cumulative rounding errors only by changing rounding rules in 
one area -- when the fraction part of the number is .5

getCautiouslyRounded(2.5) --> rounds down to 2

getCautiouslyRounded(3.5) --> rounds up to 4

getCautiouslyRounded(-2.5) --> rounds up to -2

getCautiouslyRounded(-3.5) --> rounds down to -4