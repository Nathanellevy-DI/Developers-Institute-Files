//  Exercise 1 : Giphy API

const url1 = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url1)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .then(data => {
        console.log("Exercise 1 Result:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });




//  Exercise 2 : Giphy API

const url2 = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url2)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .then(data => {
        console.log("Exercise 2 Result:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });




//  Exercise 3 : Async / Await

async function getStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");

        if (!response.ok) {
            throw new Error("Network response was not OK");
        }

        const data = await response.json();
        console.log("Exercise 3 Result:", data.result);

    } catch (error) {
        console.log("Error:", error);
    }
}

getStarship();




//  Exercise 4 : Analyze
// What happens?

/*
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
*/

/*
📌 Explanation (Expected Output):

1. "calling" prints immediately.
2. The function waits 2 seconds.
3. After 2 seconds, "resolved" is printed.

So the console output is:

calling
resolved
*/
