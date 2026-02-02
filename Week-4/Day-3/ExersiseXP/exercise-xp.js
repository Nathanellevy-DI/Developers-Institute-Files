// 🌟 Exercise 1 : Comparison
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("The number is less than or equal to 10");
    } else {
      reject("The number is greater than 10");
    }
  });
}

// Tests
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// 🌟 Exercise 2 : Promises
const fourSecondPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// Example usage
fourSecondPromise.then(result => console.log(result));

// 🌟 Exercise 3 : Resolve & Reject
const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

// Example usage
resolvedPromise.then(value => console.log(value));
rejectedPromise.catch(error => console.log(error));
