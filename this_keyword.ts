function me() {
  return this;
}

// Even though the me function returned the 'this', because the me object is invoking the me function and the function returns 'this', so now the this will refere to the onject instead of the function that returned it
// so the this always refer to the function or object on te left side that is invoking it

let newMe = {
  name: "sam",
  // me:me Or
  me,
};

console.log(newMe.me());

// Nothing on the the left so it will refer to the window
console.log(me());

// Example 2

function talk() {
  return `i am ${this.name}`;
}

const friend_1 = {
  name: "Sina",
  talk,
};

const friend_2 = {
  name: "Qoli",
  talk,
};

// the name property changes base on the object on the left side that is invoking the 'this'

console.log(friend_1.talk());
console.log(friend_2.talk());

// .............. Using bind: to bind an object to another object

// Whatever value we pass to bind will be used for the value of bind

talk.bind(friend_1);

console.log(friend_1.talk());

// .............. Using call: to bind an object to another object

// Whatever value we pass to call will be used for the value of bind

talk.call(friend_2);
console.log(friend_2.talk());

// if the function require, how to use the bind, call and apply

function talk_1(language: string, age: number) {
  if (language === "en" && age >= 10) {
    return `i am ${this.name}`;
  } else if (language === "it" && age < 10) {
    return `Sono ${this.name}`;
  }
}

const friend_3 = {
  name: "Sam",
  talk_1,
};

const friend_4 = {
  name: "Kay",
  talk_1,
};

// talk_1.call(friend_3)

// console.log(friend_3.talk_1("en", 20));

// talk_1.bind(friend_4);
// console.log(friend_4.talk_1("it", 6));

talk_1.apply(friend_3);

console.log(friend_3.talk_1("it", 9));

function Person(n:string) {
  this.name = n;
  console.log(this);
}

const game = new Person("fifa");
game


class newMan {
    getValue(){
        return console.log(this);
    }
}

const kay = new newMan()
kay.getValue()