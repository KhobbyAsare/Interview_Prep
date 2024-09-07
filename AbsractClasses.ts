abstract class PersonAbstract {
  constructor(public name: string) {}
  display(): void {
    console.log(this.name);
  }
  abstract find(name: string): string;
}

class Person1 extends PersonAbstract {
  constructor(public name: string) {
    super(name);
  }
  find(name: string): string {
    return "Hello " + name;
  }
}

let newPerson2 = new Person1("Samuel");
console.log(newPerson2.find("Kel"));

// ....................................................

abstract class Animal {
  // Abstract method
  abstract makeSound(): void;

  // Concrete method
  eat(): void {
    console.log("This animal eats food.");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

let dog = new Dog();
dog.makeSound();

// ........................

abstract class NewClass {
  constructor(public name: string, public age: number) {}

  abstract human1(): void;
}

class Human extends NewClass {
  constructor(public name: string, public age: number) {
    super(name, age);
    this.name = name;
  }

  human1(): void {
    console.log("Bark");
  }
}

let h1 = new Human("", 2);
h1.human1();
