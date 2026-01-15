
// Exercise 1: Scope
console.log("=== Exercise 1: Scope ===");

function funcOne() {
    let a = 5;
    if (a > 1) { a = 3; }
    console.log(`funcOne a: ${a}`); // 3
}
funcOne();

let a = 0;
function funcTwo() { a = 5; }
function funcThree() { console.log(`funcThree a: ${a}`); }
funcThree(); // 0
funcTwo();
funcThree(); // 5

function funcFour() { window.a = "hello"; }
function funcFive() { console.log(`funcFive a: ${a}`); }
funcFour();
funcFive(); // hello

let a2 = 1;
function funcSix() {
    let a2 = "test";
    console.log(`funcSix a2: ${a2}`); // test
}
funcSix();

let a3 = 2;
if (true) {
    let a3 = 5;
    console.log(`if block a3: ${a3}`); // 5
}
console.log(`outside if block a3: ${a3}`); // 2

// Exercise 2: Ternary Operator
console.log("=== Exercise 2: Ternary Operator ===");

const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log("experiencePoints:", experiencePoints); // 10

// Exercise 3: Is it a string?
console.log("=== Exercise 3: Is it a string? ===");

const isString = value => typeof value === "string";
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false

// =============================
// Exercise 4: Find the sum
// =============================
console.log("=== Exercise 4: Find the sum ===");

const sum = (a, b) => a + b;
console.log("sum(3,4):", sum(3, 4)); // 7

// Exercise 5: Kg and grams
console.log("=== Exercise 5: Kg and grams ===");

function kgToGrams(kg) { return kg * 1000; }
console.log(kgToGrams(2)); // 2000

const kgToGramsExpr = function (kg) { return kg * 1000; };
console.log(kgToGramsExpr(3)); // 3000

const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(4)); // 4000

// Exercise 6: Fortune Teller
console.log("=== Exercise 6: Fortune Teller ===");

(function (numChildren, partnerName, geoLocation, jobTitle) {
    const message = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
    document.body.innerHTML += `<p>${message}</p>`;
})(2, "Alice", "Paris", "Developer");

// Exercise 7: Welcome
console.log("=== Exercise 7: Welcome ===");

(function (userName) {
    const navbar = document.querySelector("#navbar");
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `<img src="https://via.placeholder.com/30" alt="profile"/> Welcome, ${userName}`;
    navbar.appendChild(userDiv);
})("John");

// Exercise 8: Juice Bar
console.log("=== Exercise 8: Juice Bar ===");

// Part I
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        document.body.innerHTML += `<p>The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.</p>`;
    }
    addIngredients("apple", "banana", "orange");
}
makeJuice("large");

// Part II
function makeJuice2(size) {
    const ingredients = [];
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }
    function displayJuice() {
        document.body.innerHTML += `<p>The client wants a ${size} juice, containing ${ingredients.join(", ")}.</p>`;
    }

    addIngredients("apple", "banana", "orange");
    addIngredients("kiwi", "mango", "grapes");
    displayJuice();
}
makeJuice2("medium");
