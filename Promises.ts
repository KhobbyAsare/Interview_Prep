const promise = new Promise((resolve, reject) => {
  let count = 20;

  if (count > 10) {
    setTimeout(() => {
      resolve("Count Resolved");
    }, 1000);
  } else {
    setTimeout(() => {
      reject("count Rejected");
    }, 1000);
  }
});

promise.then((res) => console.log(res)).catch((err) => console.error(err)).finally(()=>{
  console.log('completed');
  
});
//After the timeout -  output: Count Resolved

// promise.all

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 300);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 200);
});


Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
  
  console.log(res[0]);
  console.log(res[1]);
  //After the timeout - output :
  // 2 
  // 3
});

// fake api

const mock = (success: boolean, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ status: 200, data: {} });
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};
const someEvent = async () => {
  try {
    await mock(true, 1000);
  } catch (e) {
    console.log(e.message);
  }
};

someEvent();

// fetch api

fetch("url")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// ..........

const handlePromise = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2000ms passed");
    }, 2000);
  });

  let result = await promise;
  console.log(result);
};

handlePromise();

async function exampleAsync() {
  let response = await fetch("https://api.github.com/users/github");
  let user = await response.json();
  console.log(user);
  return user;
}

exampleAsync().then((user) => console.log(user));

function checkNumber() {
  return new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
      resolve("Success!"); // Promise is fulfilled
    } else {
      reject("Failed!"); // Promise is rejected
    }
  });
}

async function getResult() {
  try {
    let message = await checkNumber();
    console.log("This is in the then: " + message);
  } catch (err) {
    console.log("This is the catch: " + err);
  }
}

getResult();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findNumber = numbers.find((item) => item % 3 === 0);
console.log(findNumber);

let filterNumbers = numbers.filter((item) => {
  return item % 3 === 0;
});

console.log(filterNumbers);
