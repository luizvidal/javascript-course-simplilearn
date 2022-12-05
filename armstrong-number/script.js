// let number = 371;

// function armstrong(num) {
//     let a = parseInt(num / 100);
//     let b = num % 100;
//     let c = parseInt((num % 100) / 10);
//     let d = b % 10;
//     let number = (a * a * a) + (c * c * c) + (d * d * d);
//     console.log(number)
// }

// armstrong(number)

// for (let i = 100; i <= number; i++) {

// }
i = 1;
n = 5
f = 1;

do {
    f = f * i;
    i++;
} while(i <= n);
document.write(f)
