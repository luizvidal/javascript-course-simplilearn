// let x = 10;
// document.write(`<h1>The value of x is: ${x}</h1>`)
// if (x >= 10) document.write('<p>The value of x is greater or equal 10</p>');
// else document.write('<p>The value of x is less than 10<p>')
let x = 1230

if (x > 0) {
    if (x % 2 == 0) {
        document.write('The number %o is positive and even', x)
    } else {
        document.write('The number is positive and odd')
    }
} else if (x < 0) {
    if (x % 2 == 0) {
        document.write('The number is negative and even')
    } else {
        document.write('The number is negative and odd')
    }
} else {
    document.write('The number is even and null')
}