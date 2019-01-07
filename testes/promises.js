
// PROMISES


let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('Room cleaned.');
    });
};

let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' Garbage removed.');
    });
};

let winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' Icecream won!');
    });
};

cleanRoom().then(function (result) {
    return removeGarbage(result);
}).then(function (result) {
    return winIcecream(result);
}).then(function (result) {
    console.log('Finished: ' + result);
})


// Nesse exemplo, quando todas as promises foram resolvidas, a mensagem de finalização é exibida.
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
    console.log("All promises finished.")
});

// Nesse exemplo, quando uma das promises foi resolvida, a mensagem de finalização é exibida.
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
    console.log("One of the promises finished.")
});