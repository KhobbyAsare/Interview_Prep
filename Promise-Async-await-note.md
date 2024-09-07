Here's an example of how you can use a Promise with an API using the `fetch` function in JavaScript:

```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();  // This returns a promise
    })
    .then(data => console.log(data))
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
```

In this example, `fetch` returns a Promise that resolves to the Response to that request, whether it is successful or not. You can use `then` to handle the response, and `catch` to handle any errors.

You can also use `async/await` with an API like this:

```javascript
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchData();
```

In this example, `fetchData` is an async function, so you can use `await` within it. `await` pauses the execution of the function until the Promise is resolved or rejected, and then resumes the execution and returns the resolved value or throws the rejected reason.