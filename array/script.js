let a = 'string a';
let b = 'string b';
let c = 'string c';
let array = [a, b, c];
// array.forEach((value, index, array) =>  array[index] = `<h1>${value}</h1>`);
array = array.map(value => `<h1>${value}</h1>`)
document.write(array)
console.log(array)