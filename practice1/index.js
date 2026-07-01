// console.log("Hello Backend!!");

// let name="Pranshu";
// let age= 18;

// console.log(name);
// console.log(age);

const add = require("./math");
const greet = require("./greet");

console.log(add(5,7));
console.log(greet("PRanshu"));

const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello Pranshu");

fs.writeFileSync("intro.txt", "My name is Pranshu");
console.log("File created successfully");