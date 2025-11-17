let mySym = Symbol ("mySym1")

let jsUser = {
    name: "Dev",
    "full name": "Dev Krishan",
    email: "dev@gmail.com",
    loggedIn: true,
    mySym: "tmkc", // here mySym is a string, not a symbol
    [mySym]: "mySym1" // this is correct syntax to use symbol as a key in an object.
}

console.log (jsUser);
console.log (jsUser.email);
console.log (jsUser["email"]);
console.log (jsUser["full name"]); // keys which are written explicitly in "" or which are symbols or dynamic can only be accessed like this
console.log (jsUser.mySym);
console.log (jsUser[mySym]); // undefined
console.log (jsUser["mySym"]);

jsUser.email = "dev@icloud.com" // update
console.log (jsUser);

jsUser.greeting = function () {
    console.log (`Hello ${this.name}`); // 'this' can access the keys of object if used in an object method.
}
console.log (jsUser.greeting); // prints [Function (anonymous)]
console.log (jsUser.greeting ());

Object.freeze (jsUser) // data can not be manipulated now
jsUser.email = "dev@iiitp.com"
console.log (jsUser);
