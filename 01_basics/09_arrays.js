let arr = [0, 1, 2, 3, 4, 5, true, "Dev"]
let arr2 = new Array (1, 2, 3, 4, 5)
console.log (arr[4], arr[6], arr2[3]);
console.log (arr.length);

arr.push (6) // adds at the end
console.log (arr);
arr.pop ()
console.log (arr); // removes from the end
arr.unshift (-1)
console.log (arr); // adds at the beginning
arr.shift () // removes from the beginning
console.log (arr);
console.log (arr.includes (9)); // returns true or false
console.log (arr.indexOf (9)); // returns -1 if not found

let str = arr.join () // default value is ","
console.log (str);
str = arr.join ("")
console.log (str);
str = arr.join (".")
console.log (str);

console.log ("A", arr2);
let arr3 = arr2.slice (1, 3)
console.log (arr3);
console.log ("B", arr2);
arr3 = arr2.splice (1, 3) // includes the range (upper limit) and deletes the sliced portion from base array.
console.log (arr3);
console.log ("C", arr2);

arr = [1, 2, 3]
arr.push ([4, 5])
console.log (arr);
arr.pop ()
arr2 = arr.concat ([4, 5])
console.log (arr2);

arr2 = [4, 5]
arr3 = [...arr, ...arr2]
console.log (arr3);

arr = [1, 2, 3, 4, [5, 6], [7, 8, [9, 10]]]
arr2 = arr.flat (2)
console.log (arr2);

console.log(Array.isArray ("Dev"));
console.log(Array.isArray ([1, 2]));
console.log (Array.from ("Dev"));
console.log (Array.from ({name: "Dev"})); // []
console.log (Array.of (1, 2, 3));
