
let lib1 = require("./lib1");
let lib2 = require("./lib2");
let libmultipla = require("./lib-multipla");

console.log(lib1());
console.log(lib2());
console.log(libmultipla.a());
console.log(libmultipla.b());
console.log(module.exports); // {}
console.log(exports); // {}

console.log(__dirname);
console.log(__filename);

console.log('command line arguments', process.argv);

setTimeout(function () {
    console.log('timeout completed');
}, 1000);

var count = 0;
var intervalObject = setInterval(function () {
    count++;
    console.log(count, 'second passed');
    if (count == 5) {
        console.log('exiting');
        clearInterval(intervalObject);
    }
}, 1000);

process.nextTick(function () {
    console.log('printed in the next tick');
});
console.log('printed immediately');

// a string
var str = "Hello Buffer World!";
// From string to buffer
var buffer = new Buffer(str, 'utf-8');
// From buffer to string
var roundTrip = buffer.toString('utf-8');
console.log(roundTrip); // Hello



var foo = 123;
if (true) {
    (function () { // create a new scope
        var foo = 456;
    })();
}
console.log('foo value', foo); // 123;


/* Whenever we have a function defined inside another function, the inner function has access to the variables declared
in the outer function. Below you can see that the inner function has access to a variable (variableInOuterFunction) from the
outer scope. The variables in the outer function have been closed by (or bound in) the inner function. Hence the term
closure. */
// closure1.js
function outerFunction(arg) {
    var variableInOuterFunction = arg;
    function bar() {
        console.log(variableInOuterFunction); // Access a variable from the outer scope
    }
    // Call the local function to demonstrate that it has access to arg
    bar();
}

outerFunction('hello closure!'); // logs hello closure!

/* The inner function can access the variables from the outer scope even after the outer
function has returned. This is because the variables are still bound in the inner function and not dependent on the
outer function.*/

// closure2.js
function outerFunction2(arg) {
    var variableInOuterFunction = arg;
    return function () {
        console.log(variableInOuterFunction);
    }
}
var innerFunction = outerFunction2('hello closure after return of the outer function!');
// Note the outerFunction has returned
innerFunction(); // logs hello closure!

/*
projectroot
   |-- node_modules/foo/fooV1Files
   |-- moduleA/moduleAFiles
   |-- moduleB/moduleBFiles
   |-- moduleC/moduleCFiles
   |-- moduleD
         |-- node_modules/foo/fooV2Files
         |-- moduleDFiles
*/

var f = () => {
    return 1;
}

console.log('valor da funcao f:', f());