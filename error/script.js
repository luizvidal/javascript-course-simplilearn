/* function f1() {
    console.log('This is function 1')
}

function f2() {
    console.log('This is function 2')
}

function makeOrder() {
    console.log('Here is your black coffee')
}

try {
    makeOrder();
} catch(error) {
    console.error('Sorry an error occured in your program')
} finally {
    console.log('This block will execute no matter what!')
} */

const a = 9;

if (a < 10) {
    throw new Error('This is a costumizable error!')
}