const x = {
  name: "Sammy",
  address: {
    city: "...",
    state: "Ghana",
  },
};

const y =JSON.parse(JSON.stringify(x));
// const y = structuredClone(x);
y.address.state = "US";

console.log(x.address.state);

console.log(typeof undefined);
console.log(typeof(null));


// console.log( 0 == false ); // true because they are the same value
// console.log( 0 === false ); // false, because they are of a different type


// Promises - They emit a single value at a time. They execute immediately after creation and are not cancellable. They are Push errors to the child promises. 

// Observables - They are only executed when subscribed to them using the subscribe() method. They emit multiple values over a period of time. They help perform operations like forEach, filter, and retry, among others. They deliver errors to the subscribers. When the unsubscribe() method is called, the listener stops receiving further values.

// Promise
let _promise = new Promise((resolve, reject) => {
    let condition = true; // This is just a sample condition.
    if(condition) {
        resolve("Promise resolved");
    } else {
        reject(Error("Promise rejected"));
    }
});

console.log(_promise);


_promise.then((value) => {
    console.log(value);
}, (error) => {
    console.error(error);
});


// Observable
import { Observable } from 'rxjs';

let observable = new Observable(subscriber => {
    let count = 1;
    let interval = setInterval(() => {
        subscriber.next(count++);
        if(count > 7) {
            clearInterval(interval);
            subscriber.complete();
        }
    }, 1000);
});

let subscription = observable.subscribe({
    next(value) { console.log(value); },
    error(err) { console.error('Error: ' + err); },
    complete() { console.log('Completed'); }
});

setTimeout(() => {
    subscription.unsubscribe();
}, 3500);
