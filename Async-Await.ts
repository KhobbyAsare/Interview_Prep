function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

const msg = async function () {
  //Async Function Expression
  const msg = await helloWorld();
  console.log(msg);
  
  console.log(`Message: ${msg}`);
};

const msg1 = async () => {
  //Async Arrow Function
  const msg = await helloWorld();
  console.log("Message:", msg);
};

msg(); // Message: Hello World! <-- after 2 seconds
msg1(); // Message: Hello World! <-- after 2 seconds

// fetch api async await

let url = "example.com";
let queryParams = "new";

const getSuggestions = async () => {
  const wordQuery = "word 1";
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint, { cache: "no-cache" });
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse, "response");
    }
  } catch (error) {
    console.log(error);
  }
};
