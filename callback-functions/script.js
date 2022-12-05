// function abc(call) {
//     call();
// }

/* function one() {
    setTimeout(function() {
        console.log(1);
        two();
    }, 3000)
}

function two() {
    console.log(2)
}

function three() {
    console.log(3)
}

one();
 */

function person(friend, func) {
    console.log(`My friend's name is ${friend}`)
    func()
}

function person2() {
    console.log('My name is Luiz')
}

person("Luiz", person2);