console.log (3 + 2, 3 - 2, 3 / 2, 3 % 2, 3 * 2, 3 ** 2); // arithmetic operators

console.log (3 > 3, 3 >= 3, 3 < 3, 3 <= 3, 3 != 2); // comparison operators
console.log (3 == 3.0); // true
console.log (3 == '3.0'); // loose (does type conversion)
console.log (3 === 3.0); // true
console.log (3 === '3.0'); // strict

console.log (true && false, false || true, !true); // logical operators

// 

console.log ("Dev" + " Krishan"); // Dev Krishan
console.log ('1' + 2); // 12
console.log (1 + '2'); // 12
console.log ('1' + 2 + 2); // 122
console.log (1 + 2 + '2'); // 32

console.log (+true); // 1
console.log (+""); // 0

let a = 4
console.log (++a); // 5 and a = 5
console.log (a++); // 5 but a = 6

console.log (2 > '1'); // true
console.log (null > 0); // false
console.log (null == 0); // false
console.log (null >= 0); //true
// the comparison operator does type conversion that's why null >= 0 returns true.

console.log (null == undefined); // true
// null is only loosely equal to undefined.
