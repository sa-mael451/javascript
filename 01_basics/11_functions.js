function sum (x, y) {
    return x + y
}

console.log (sum (4, 5));

function greet (name) {
    console.log (`Hello ${name}`);
}

greet ("Dev")
greet () // "Hello undefined"
