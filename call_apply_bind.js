console.log("call, apply and bind in Javascript");

let name = {
  firstName: "Tanay",
  lastName: "Kamath",
};

let printFullName = function (hometown, state) {
  // this refers to object when used with .call() else the window
  //   console.log(this);
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

let name2 = {
  firstName: "John",
  lastName: "Doe",
};

// function borrowing

// call and apply

// extra params as args
printFullName.call(name, "Mangalore", "Karnataka");

// extra params as array
printFullName.apply(name2, ["Manchester", "UK"]);

// bind method

// binds it with the object and returns a copy of the method with that
let printMyName = printFullName.bind(name, "Mangalore", "Karnataka");
printMyName();
