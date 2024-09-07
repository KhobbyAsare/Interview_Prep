// JavaScript new Array()
const points = new Array(40, 100, 39, 50, 100);
console.log(points);
console.log(Array.isArray(points));

// sort().................

// Numeric Sort
/**
 * By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

// ...................... HOW IT WORKS................

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

// ......................... END OF HOW IT WORKS................

You can fix this by providing a compare function:
 */
console.log(
  points.sort(function (a, b) {
    return a - b;
  })
);

let myArray: number[] = [1, 2, 4, 7, 2, 5, 9, 102, 4, 404];
// looking at the example, it sorts the numbers base on the first digit; that is my 102 and 404 are where they are

console.log(myArray.sort());

// shuffling array
function shuffle(arr:Array<string|number>) {
  let i: number, j: string | number, temp: string | number;

  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
  }
}

let a = shuffle([2, 3, 5, 67, 2, 1]);
console.log(a);

// String to array

let word = "Hebrew";

let wordArr = Array.from(word);
console.log(Array.isArray(wordArr));
console.log(Array.of(word));
console.log(wordArr);

// array manipulation

let fruits = ["Apple", "Banana"];
// push and pop manipulate the array from the back of the array
// unshift() adds to the begining of thw array
// the shift() removes from the begining of the array

fruits.push("Mango");
fruits.push("orange");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Egg");
console.log(fruits);

const fruits1 = ["apple", "orange", "banana"];

for (let fruit of fruits1) {
  console.log(fruit);
}

let groceries = [
  {
    item: "milk",
    price: 40,
  },
  {
    item: "egg",
    price: 15,
  },
  {
    item: "fruits",
    price: 10,
  },
];

let sum = 0;

//Reduce method
let summation:number = groceries.reduce((acc, curr) => acc + curr.price, 0);
console.log(summation);

//looping through the array
for (let grocery of groceries) {
  sum += grocery.price;
}

console.log(sum);

// .reduce
let counts = [1, 2, 3, 4, 6, 7, 8, 9];

let sumation = counts.reduce((accu, curr) => {
  return accu + curr;
}, 0);

console.log(sumation);


let found = counts.find((n)=> n % 3 === 0)
console.log(found);


let duplicate = [1,1,1, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 2, 4]

let newArr = [...new Set(duplicate)];
console.log(newArr);