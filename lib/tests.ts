import { getCautiouslyRounded } from './getCautiouslyRounded';


// Test 1
let num = getCautiouslyRounded(0.2);
if (num === 0) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2
num = getCautiouslyRounded(1.2);
if (num === 1) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3
num = getCautiouslyRounded(-0.2);
if (num === 0) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4
num = getCautiouslyRounded(-1.2);
if (num === -1) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5
num = getCautiouslyRounded(-0.5);
if (num === 0) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6
num = getCautiouslyRounded(-1.5);
if (num === -2) console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7
num = getCautiouslyRounded(-2.5);
if (num === -2) console.log('test 7 passed');
else console.log('test 7 failed');


// Test 8
num = getCautiouslyRounded(1.5);
if (num === 2) console.log('test 8 passed');
else console.log('test 8 failed');


// Test 9
num = getCautiouslyRounded(2.5);
if (num === 2) console.log('test 9 passed');
else console.log('test 9 failed');


// Test 10
num = getCautiouslyRounded(0);
if (num === 0) console.log('test 10 passed');
else console.log('test 10 failed');


// Test 11
num = getCautiouslyRounded(2);
if (num === 2) console.log('test 11 passed');
else console.log('test 11 failed');


// Test 12
num = getCautiouslyRounded(-2);
if (num === -2) console.log('test 12 passed');
else console.log('test 12 failed');


// Test 13
num = getCautiouslyRounded(-2.88);
if (num === -3) console.log('test 13 passed');
else console.log('test 13 failed');


// Test 14
num = getCautiouslyRounded(2.88);
if (num === 3) console.log('test 14 passed');
else console.log('test 14 failed');


// Test 15
num = getCautiouslyRounded(3.88);
if (num === 4) console.log('test 15 passed');
else console.log('test 15 failed');


// Test 16
num = getCautiouslyRounded(-3.88);
if (num === -4) console.log('test 16 passed');
else console.log('test 16 failed');
