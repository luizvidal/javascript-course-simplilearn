function Print() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    alert(`
The name is: ${name}
The password is: ${password}
    `)
}

function fun1() {
    let opt1 = document.getElementById("opt1").checked;
    let opt2 = document.getElementById("opt2").checked;
    console.log(opt1, opt2  )
}

function fun2() {
    // let selected = document.getElementById("selected").value;
    let selected = document.getElementById("selected").options
    console.log(selected)
}

function fun3() {
    let x = document.getElementsByTagName("section");
    // x[0].style.background = "red"
    for (let item of x) {
        item.style.background = "red"
    }

}
let toggle = false;
function fun4() {
    let _class = document.getElementsByClassName("class");
    
    for (let element of _class) {
        if (toggle) {
            element.style.color = "white"
            element.style.background = "black"
        } else {
            element.style.color = "black"
            element.style.background = "white"
        }
    }
    
    toggle = !toggle

}