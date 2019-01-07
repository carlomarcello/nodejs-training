const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

// using spread operator
const copiedPerson = {...person};
console.log("copied person: ", copiedPerson);


const hobbies = ['Sports', 'Cooking'];

// using spread operator
const copiedArray = [...hobbies];
console.log("copied array: ", copiedArray);

// using rest operator (in the argument list of a function)
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
