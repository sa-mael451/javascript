let a = new Number (4)
console.log (a.toString ().length);
console.log (a.toFixed ());
a = 34.1745
console.log (a.toPrecision (4));
a = 10000000000
console.log (a.toLocaleString ());
console.log (a.toLocaleString ('en-IN'));

console.log (Math);
console.log (Math.abs (-4));
console.log (Math.round (4.6));
console.log (Math.ceil (4.2));
console.log (Math.floor (4.6));
console.log (Math.min (4, 3, 6, 8));
console.log (Math.max (4, 3, 6, 8));

console.log (Math.random ()); // prints any random real number between 0 and 1 including both of them.
let max = 25, min = 10
console.log (Math.random () * (max - min) + min);
