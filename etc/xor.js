/*
The purpose of this exercise is to test the xor bitwise variable swap

? Learning how and why xor can be used to switch values of variables can be used for sorting values

Resources:
https://stackoverflow.com/questions/249423/how-does-xor-variable-swapping-work

*/

// Initialized original variable values
let a = 5; 
let b = 10;

// Logging the values of a and b
console.log("This is the value of a: " + a); // Expected value: 5
console.log("This is the value of b: " + b); // Expected value: 10

// The xor operator in javascript is designated as "^" in javascript
a = a ^ b;
b = a ^ b;

// Testing the new value of a and b
console.log(a);
console.log(b);

// Although b is swapped, a still needs to be swapped with the value of b
a = a ^ b;

// Confirming the values are both switched
console.log("This is the value of a: " + a); // Expected value: 10
console.log("This is the value of b: " + b); // Expected value: 5



