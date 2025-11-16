let myDate = new Date ()
console.log (myDate);
console.log (myDate.toString ());
console.log (myDate.toDateString ());
console.log (myDate.toLocaleString ());
console.log (myDate.getMonth () + 1);
console.log (myDate.getDate ());

let newDate = new Date (2023, 0, 11, 5, 3)
console.log (newDate.toString ()); // 23 Jan 2023 05:03

newDate = new Date ("2023-01-23")
console.log (newDate.toString ());

let timeStamp = Date.now ()
console.log (timeStamp); // in milliseconds
console.log (Math.floor (timeStamp / 1000)); // in seconds
