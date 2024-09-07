class Car {
  constructor(
    public name: string,
    public color: string,
    public price: number,
    public year: number
  ) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.price = price;
  }

  get car_name() {
    return this.name;
  }

  set _car_name(new_car_name: string) {
    this.name = new_car_name;
  }

  static hello() {
    return "Hello!!";
  }
}
// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.

console.log(Car.hello());


let new_car = new Car("Benz", "Sky blue", 2000, 2024);
console.log(new_car.color);
new_car._car_name = "Rolls Royce";
console.log(new_car.car_name);
// console.log(new_car.hello);



class InstanceCar extends Car{
    buyer:string
    constructor(name:string, color:string, price:number, year: number, buyer:string){
        super(name, color, price, year);
        this.buyer = buyer
    }
}

/**
 * Sure, I’d be happy to explain extend and super in TypeScript classes.

Extend In TypeScript, the extend keyword is used to create a class that inherits from another class1. The original class being extended is called the base or superclass1. It allows the subclass to inherit and extend the functionalities of their parent classes2. Here’s an example:

class A {
  name: string;
  doSomething(): void {
    // some code here
  }
}

class B extends A {
  // B now has the same variables and methods as A
}


In the above example, class B extends class A, meaning B inherits all properties and methods from A3.

Super: The super keyword in TypeScript is used within a subclass to call the constructor of its parent class2. It’s essential for calling the parent class’s constructor and overriding subclass methods2. Here’s an example:

class A {
  constructor(public name: string) {
    // some code here
  }
}

class B extends A {
  constructor(name: string, public age: number) {
    super(name); // Call the constructor of A
    // some code here
  }
}

In the above example, super(name) in the constructor of B is used to call the constructor of A4. This is necessary because when extending a class in TypeScript, the derived class must call super() before it can use the this keyword4.

Remember, when you extend a class, the subclass can override the methods of the superclass. But if you want to use the superclass method, you can call it with super.methodName()2.
 */

class A {
  constructor(public name: string) {
    // some code here
    this.name  = name
  }
}

let _yes = new A('looo')
console.log(_yes.name);


class B extends A {
  constructor(name: string, public age: number) {
    super(name); // Call the constructor of A
    // some code here
  }
}

