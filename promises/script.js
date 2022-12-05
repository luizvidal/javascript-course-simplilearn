/* let prom = new Promise(function(resolve, reject) {
    let drive = true;
    if (drive) {
        resolve("Yes");
    } else {
        reject("No");
    }
});

prom.then(function(resolve) {
    console.log(`${resolve} the user know how to drive`);
}).catch(function(reject) {
    console.log(`${reject} the user doesn't know how to drive`);
}) */

let functions = function() {
    return new Promise(function(resolve, reject) {
        resolve(" Learnt functions")
    })
};

let callbacks = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + " Learnt callbacks")
    })
};

let promises = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + " Good to go for promises in javascript")
    })
};

functions().then(function(result) {
    return callbacks(result)
}).then(function(result) {
    return promises(result)
}).then(function(result) {
    console.log("good to go "+ result)
})