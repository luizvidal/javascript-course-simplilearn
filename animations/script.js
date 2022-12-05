/* function fadeIn() {
    document.getElementById("img").style.opacity = 1

    let interval = setInterval(() => {
        document.getElementById("img").style.opacity -= 0.1
        
    }, 200)
};

function fadeOut() {
    document.getElementById("img").style.opacity = 0
    
    let interval = setInterval(() => {
        document.getElementById("img").style.opacity += 0.1
        
    }, 200)
};

function increase() {
    document.getElementById("img").style.width = "750px"
}

function decrease() {
    document.getElementById("img").style.width = "500px"

} */

let width = 100;
let addtion = 2;
let intervalId = 0;

function increase() {
    clearInterval(intervalId);
    intervalId = setInterval(zoomin, 10)
}

function decrease() {
    clearInterval(intervalId);
    intervalId = setInterval(zoomout, 10)
}

function zoomin() {
    if (width < 200) {
        width += addtion;
        document.getElementById("img").style.width = width;
    } else {
        clearInterval(intervalId)
    }
}

function zoomout() {

}