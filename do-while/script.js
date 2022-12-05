let x = 1;

function log(arg) {
    document.write(arg)
}

let button = 

`<div>
    <button style="background:black; border: none; color:white;">${x}</button>
</div>`

do {
    document.write(`<div>
    <button style="background:black; border: none; color:white;">${x}</button>
</div>`)
    x++;
} while(x <= 10);