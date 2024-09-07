class Dog1 {
  _name: string;
  constructor(name: string) {
    this._name = name;
    // Remove the closing curly brace
  }

  introduce() {
    console.log("This is " + this._name + " !");
  }

  // A static method
  //   static methods can only be called by the class that created it, not the instance class
  static bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog1("Buster");
myDog.introduce();

// Calling the static method
Dog1.bark();

// .......................... Real Example.....

abstract class CalculateYears {
  friendsYears(year: string): number {
    let _years = 2024 - parseInt(year);
    return _years;
  }
}

class Friends extends CalculateYears {
  name: string;
  age: number;
  years: string;
  constructor(name: string, age: number, years: string) {
    super();
    this.name = name;
    this.age = age;
    this.years = years;
  }

  get _name() {
    return this.name;
  }

  set _name(new_name: string) {
    this.name = new_name;
  }
}

let Friend1 = new Friends("Alex", 20, "2000");

console.log(Friend1.friendsYears("2000"));

console.log(Friend1._name);
Friend1._name = "Micheal";
console.log(Friend1._name);

interface ManStruc {
  first_name: string;
  last_name: string;
  age: number;
  role: string;
  getFullname: () => string;
}

class _Man implements ManStruc {
  first_name: string;
  last_name: string;
  age: number;
  role: string;

  constructor(
    first_name: string,
    last_name: string,
    age: number,
    role: string
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.role = role;
  }

  getFullname() {
    return `${this.first_name} ${this.last_name}`;
  }
}

let man1 = new _Man("John", "Doe", 20, "Developer");
console.log(man1.getFullname());


