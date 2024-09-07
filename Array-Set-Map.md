<!--.......... ARRAYS AND SET............. -->

let myArray = [1,2,3,4,5]
let mySet = new Set(myArray);

# the set object let you store unique values of any type whether primitive type or object references.

use cases:
1. # to remove all duplicate values from any array data set


# Turn the set back to an array by spreading it.

let uniqueArray = [...mySet]

Set methods:
1. .add()

# you can add any data type using the add 
mySet.add(6)
mySet.add('hello')
mySet.add([2,3,5,6])
mySet.add(true)
mySet.add({
    name: 'micheal smith'
})


2. .delete()

# you can delete any data using the delete method 
mySet.delete(3)
mySet.delete('hello')
mySet.delete({
    name: 'micheal smith'
})


3. .clear

# clear accepts no parameter and its use to clear all the data in the set 

mySet.clear()

4. .has

# .has is use to check if an element is in there.
# it is similar to .includes that is used on arrays. 
# it returns a boolean value

mySet.has(5);
mySet.has('hello');


5. .size

# to check the length or size of the set
# similar to .length with array

mySet.size


## Difference between arrays and set

# They may seem similar but there is differences between them:

1. 
# An array is an ordered list of object. you can access an element in an array by refencing the integer position in the list. eg: myArray[3];

# A set is an unordered poll of unique elements, since its not ordered, you can't reference an element by their index. 
# Eg: console.log(mySet[4]) // output: undefined


## When is it better to use Set over array

1.
# Set is different from an array. it is not meant to replace array entirely, but to provide support; like removing duplicates from an array. it helps complete what array is missing



<!-- OBJECTS AND MAPS  -->

# javascript map object holds key value pairs and remembers the original insertion order of the keys, any value either primitive or object values may be used as either key or value.

# map is a data structure that exist in other programming language. javascript first introduced it in ES6 and they help you to map arbitary values to other values, most inportantly you can use object as keys.


let myMap = new Map([['name','john'], ['surname','Doe']]);

console.log(myMap);


## Prblems Maps solves:

# javascript object only support one key object. if you add multiple key objects it only remember the last one

let myObject = {}

let a = {}
let b = {}

myObject[a] = 'a' 

# console.log(myObject); // {'[object Object]' : 'a'}


myObject[a] = 'a' 
myObject[b] = 'b' 

# console.log(myObject); // {'[object Object]' : 'b'}

# the above problem is that the myObject is not able to keep track of the previous insertion, which is a.
# To solve this we can use the map..

let a = {}
let b = {}

let myMap = new Map([[a, 'a'],[b, 'b']]);

console.log(myMap)
# our map keeps track of both different key object. {{}=> 'a', {} = > 'b'} 

## Maps methods:

1. .set()
let myMap = new Map([[{}, 'a'],[{}, 'b']]);
# like .add on Set, Maps also have .set to add a new key value pair.

# any data type
myMap.set({}, 'c');
myMap.set('greet', 'hello');
myMap.set(3, 10);

2. .delete()

let myMap = new Map([ [1, 'one'] ]);
# delete a value from our map
# it deletes using a specific key

myMap.delete(1)

3. .clear()
let myMap = new Map([ [1, 'one'], [2, 'two'] ]);
# same clear on set. use to clear all the elements in the map

myMap.clear();


4. .has()
let myMap = new Map([ [1, 'one'], [2, 'two'] ]);

# to check if an element exist in the map.
# it search by keys

myMap.has(1) 
<!-- output: true -->
myMap.has('hello')
<!-- output: false -->
myMap.has(2) 
<!-- output: true -->


5. .size
let myMap = new Map([ [1, 'one'], [2, 'two'] ]);

# check the size or length of the map

myMap.size


6. .get()

# get a value

console.log(myMap.get(2))