// Primitive (stack), Non-Primitive (Heap)
let a = 7
b = a
b = 4

console.log (a, b); // 7 4

let user = {
    name: "username",
    email: "user@gmail.com"
}
let user2 = user
user2.email = "dev@gmail.com"

console.log (user.email, user2.email); // dev@gmail.com dev@gmail.com
