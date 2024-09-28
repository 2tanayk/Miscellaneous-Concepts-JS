console.log("Arrow functions and this in JS");

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function: " + this.name);
    }, 100);
  }
}

let person = new Person("Bob");

// this prints blank because its a regular function
// so 'this' depends on the scope from where it is
// called i.e global scope here
person.printNameFunction();

// Arrow functions do not bind their own this,
// instead, they inherit the one from the parent scope,
// which is called "lexical scoping"
person.printNameArrow();

console.log(this.name);
