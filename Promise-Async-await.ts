let p = new Promise((resolve, reject) => {
  let a = 1 + 9;
  if (a == 2) {
    resolve("Success!"); // Promise is fulfilled
  } else {
    reject("Failed!"); // Promise is rejected
  }
});

p.then((message) => {
  console.log("This is in the then: " + message);
}).catch((err) => {
  console.log("This is the catch: " + err);
});


// async await

function checkNumber_() {
  return new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
      resolve("Success!"); // Promise is fulfilled
    } else {
      reject("Failed!"); // Promise is rejected
    }
  });
}

async function getResult_() {
  try {
    let message = await checkNumber_();
    console.log("This is in the then: " + message);
  } catch (err) {
    console.log("This is the catch: " + err);
  }
}

getResult_();
