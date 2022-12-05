/* function Start() {
    setTimeout(() => alert('Welcome to Simplicode'),2000)
} */

/* let id = 0;

const message = () => alert("Welcome to Simplicode");

function Start() {
   id = setTimeout(message, 4000)
}

function Stop() {
    clearTimeout(id)
} */

let id = 0;

const message = () => console.log("Welcome to Simplicode");

function Start() {
   id = setInterval(message, 2000)
}

function Stop() {
    clearInterval(id)
}