// let regex = /[^def]def/;
// let str = "This string contains afdef";
// let output = regex.test(str);
// console.log(output)

/* function employee() {
    let eid = document.getElementById("eid").value;
    let regex = /[DE]253[10-99]/;
    if (regex.test(eid)) alert('Valid employee id');
    else alert('Invalid employee id')
} */

let regex = /\d+321/;
let str1 = "Users phone number is 9876543210";
let output = regex.exec(str1);
console.log(str1);
