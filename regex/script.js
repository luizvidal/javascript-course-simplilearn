let regex = /Hello/g;
// i => ignore captalizations
// g => all ocurences of the pattern

let string = "Hello Hello World!";

/* let arr = regex.exec(string);
console.log(arr);
let arr2 = regex.exec(string);
console.log(arr2) */

// let output = regex.test(string);

// let output = string.match(regex);

let output = string.replace(regex, "Olá");
console.log(output)