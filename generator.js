console.log("Generators in JS!");

// generator is indicated by a * in front of the function
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// creating the generator object
const generatorObject = simpleGenerator();

console.log(generatorObject);

// executes code inside of a generator,
// returns a value and done properties
// value = whatever is yielded and done = if there is more to yield or not (true/false)
console.log(generatorObject.next());
console.log(generatorObject.next());
// return exits the generator with this value
console.log(generatorObject.return(100));
//to throw an error
// console.log(generatorObject.throw(new Error("Err :(")));
console.log(generatorObject.next());

console.log("\n");

// generators also useful when we want to use an infinite loop
// like here when we want to generate infinite ids
function* generateId() {
  let id = 1;

  while (true) {
    const increment = yield id;

    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const idGenerator = generateId();
// 1
console.log(idGenerator.next());
//5
console.log(idGenerator.next(4));
//11
console.log(idGenerator.next(6));
//12
console.log(idGenerator.next());

// generator as an iterator
console.log("\niterating an array");

function* arrayIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

const itr = arrayIterator([1, 4, 3, 8, 9]);

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
