
//  EXERCISE 1 : NUMBERS DIVISIBLE BY 2

function displayNumbersDivisible(divisor = 23) {
    let sum = 0;

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }

    console.log("Sum:", sum);
}

displayNumbersDivisible(); 
// You can test: displayNumbersDivisible(3);


//  EXERCISE 2 : SHOPPING LIS

const stock = { 
    banana: 6, 
    apple: 0,
    pear: 12,
    orange: 32,
    blueberry: 1
};  

const prices = {    
    banana: 4, 
    apple: 2, 
    pear: 1,
    orange: 1.5,
    blueberry: 10
}; 

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;

    for (let item of shoppingList) {
        if (stock[item] > 0) {
            total += prices[item];
            stock[item]--; // BONUS: reduce stock
        }
    }

    return total;
}

console.log("Shopping total:", myBill());



// EXERCISE 3 : WHAT'S IN MY WALLET?

function changeEnough(itemPrice, amountOfChange) {
    const quarters = amountOfChange[0] * 0.25;
    const dimes = amountOfChange[1] * 0.10;
    const nickels = amountOfChange[2] * 0.05;
    const pennies = amountOfChange[3] * 0.01;

    const total = quarters + dimes + nickels + pennies;

    return total >= itemPrice;
}

// Tests
console.log(changeEnough(4.25, [25,20,5,0]));
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));


 // EXERCISE 4 : VACATION COST

function hotelCost() {
    let nights = prompt("How many nights in the hotel?");

    while (isNaN(nights) || nights === "" || nights === null) {
        nights = prompt("Please enter a number:");
    }

    return nights * 140;
}

function planeRideCost() {
    let destination = prompt("Where are you flying to?");

    while (!isNaN(destination) || destination === "" || destination === null) {
        destination = prompt("Please enter a valid place:");
    }

    destination = destination.toLowerCase();

    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost() {
    let days = prompt("How many days renting the car?");

    while (isNaN(days) || days === "" || days === null) {
        days = prompt("Please enter a number:");
    }

    let cost = days * 40;

    if (days > 10) {
        cost *= 0.95; // 5% discount
    }

    return cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    console.log("Hotel cost:", hotel);
    console.log("Plane cost:", plane);
    console.log("Car cost:", car);

    return hotel + plane + car;
}

// Call it:
console.log("TOTAL VACATION COST:", totalVacationCost());



// EXERCISE 5 : USERS (DOM)

// Make sure this HTML exists:
//
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>

const divUsers = document.getElementById("container");
console.log(divUsers);

// change Pete → Richard
document.querySelectorAll(".list")[0].children[1].textContent = "Richard";

// delete Sarah (2nd li of 2nd ul)
document.querySelectorAll(".list")[1].children[1].remove();

// change first li of each ul to YOUR NAME
const userLists = document.querySelectorAll(".list");
for (let ul of userLists) {
    ul.children[0].textContent = "Nathaniel";
}

// add class student_list to both uls
userLists.forEach(ul => ul.classList.add("student_list"));

// add class university attendance to first ul
userLists[0].classList.add("university", "attendance");

// style div
divUsers.style.backgroundColor = "lightblue";
divUsers.style.padding = "20px";

// hide "Dan"
const secondUL = userLists[1];
for (let li of secondUL.children) {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
}

// border on "Richard"
const rich = userLists[0].children[1];
rich.style.border = "2px solid red";

// body font resize
document.body.style.fontSize = "20px";

// bonus alert
if (divUsers.style.backgroundColor === "lightblue") {
    alert("Hello John and Pete");
}



// EXERCISE 6 : NAVBAR CHANGE

// HTML must contain:
//
// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>

const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

const logoutLi = document.createElement("li");
logoutLi.textContent = "Logout";

const navUL = document.querySelector("#socialNetworkNavigation ul");
navUL.appendChild(logoutLi);

console.log("First link:", navUL.firstElementChild.textContent);
console.log("Last link:", navUL.lastElementChild.textContent);



// EXERCISE 7 : BOOK LIST

// HTML needs:
// <section class="listBooks"></section>

const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://picsum.photos/100",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://picsum.photos/101",
        alreadyRead: false
    }
];

const bookSection = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const div = document.createElement("div");

    const text = document.createElement("p");
    text.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        text.style.color = "red";
    }

    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";

    div.appendChild(text);
    div.appendChild(img);

    bookSection.appendChild(div);
});
