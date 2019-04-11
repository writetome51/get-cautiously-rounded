"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// Test 1
var num = index_1.getCautiouslyRounded(0.2);
if (num === 0)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
num = index_1.getCautiouslyRounded(1.2);
if (num === 1)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
num = index_1.getCautiouslyRounded(-0.2);
if (num === 0)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
num = index_1.getCautiouslyRounded(-1.2);
if (num === -1)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5
num = index_1.getCautiouslyRounded(-0.5);
if (num === 0)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6
num = index_1.getCautiouslyRounded(-1.5);
if (num === -2)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7
num = index_1.getCautiouslyRounded(-2.5);
if (num === -2)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8
num = index_1.getCautiouslyRounded(1.5);
if (num === 2)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9
num = index_1.getCautiouslyRounded(2.5);
if (num === 2)
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10
num = index_1.getCautiouslyRounded(0);
if (num === 0)
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11
num = index_1.getCautiouslyRounded(2);
if (num === 2)
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12
num = index_1.getCautiouslyRounded(-2);
if (num === -2)
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
// Test 13
num = index_1.getCautiouslyRounded(-2.88);
if (num === -3)
    console.log('test 13 passed');
else
    console.log('test 13 FAILED');
// Test 14
num = index_1.getCautiouslyRounded(2.88);
if (num === 3)
    console.log('test 14 passed');
else
    console.log('test 14 FAILED');
// Test 15
num = index_1.getCautiouslyRounded(3.88);
if (num === 4)
    console.log('test 15 passed');
else
    console.log('test 15 FAILED');
// Test 16
num = index_1.getCautiouslyRounded(-3.88);
if (num === -4)
    console.log('test 16 passed');
else
    console.log('test 16 FAILED');
