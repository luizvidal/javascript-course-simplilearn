function makeOrder(coffee) {
    return new Promise((resolve, reject) => {
        console.log('Making request for a ' + coffee);
        if (coffee === 'Black Coffee' || coffee === 'a') {
            resolve('Here is your coffee, have a nice day!')
        } else {
            reject('Sorry we only serve Black Coffee.')
        }
    })
}

function processOrder(order) {
    return new Promise((resolve) => {
        console.log('Processing order');
        resolve(order)
    })
}


async function func1() {
    try {
        
        const coffee = document.getElementById('coffee').value;
        let order =  await makeOrder(coffee);
        console.log('Order has been recieved');
        let _processOrder = await processOrder(order)
        console.log(_processOrder)

    } catch(error) {
        console.error(error)
    }

}

// func1()


/* makeOrder('Black Coffee').then(order => {
    console.log('Order has been recieved');
    return processOrder(order)
})
.then(processOrder => console.log(processOrder))
.catch(error => console.error(error)) */


// function start() {
//     const coffee = document.getElementById('coffee').value;
//     makeOrder(coffee).then((result) => {
//         console.log('Order has been recieved');
//         processOrder(result)
//     })
//     .then(result =>  console.log(result))
//     .catch((error) => {
//         console.log('Order has been recieved')
//         console.error(error)
//     })
// }
