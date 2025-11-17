let mySym = Symbol ("mySym1")

let myObj = new Object ()
console.log (myObj); // {}

let myObj2 = {}
console.log (myObj2); // {}

myObj = {
    a: 1,
    b: 2
}
myObj2 = {
    c: 3,
    d: 4
}

let myObj3 = {myObj, myObj2}
console.log (myObj3);
// myObj3 = Object.assign (myObj, myObj2) // also modifies myObj
myObj3 = {...myObj, ...myObj2}
console.log (myObj3);

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

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "dev",
            lastname: "krishan"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
const {courseInstructor: instructor} = course
console.log(instructor);

Object.freeze (jsUser) // data can not be manipulated now
jsUser.email = "dev@iiitp.com"
console.log (jsUser);
