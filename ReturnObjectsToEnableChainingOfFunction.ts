// when creating function on an object in object oriented javascript, returning the object in the function will enable you to chain functions together.

function Person(name:string) {
  this.name = name;

  this.sayName = function () {
    console.log(`Hello ${this.name}`);
    return this;
  };

  this.changeName = function (name:string) {
    this.name = name;
    return this;
  };
}

let newPerson = new Person("Samuel");
newPerson.sayName().changeName("kel").sayName();
