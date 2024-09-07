/**
 * Function Borrowing
With the bind() method, an object can borrow a method from another object.

The example below creates 2 objects (person and member).

The member object borrows the fullname method from the person object:
 */

const person1 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person1.fullName.bind(member);
console.log(fullName());

/**
 * Preserving this
Sometimes the bind() method has to be used to prevent losing this.

In the following example, the person object has a display method. In the display method, this refers to the person object:
 */

// const person2 = {
//   firstName: "John",
//   lastName: "Doe",
//   display: function () {
//     let x = document.getElementById("demo");
//     x.innerHTML = this.firstName + " " + this.lastName;
//   },
// };

// person2.display();


