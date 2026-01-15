// Exercises 1 

// Retrieve h1
const h1 = document.getElementById("ex1_h1");
console.log(h1);

// Remove last paragraph
const article = document.querySelector("article");
article.removeChild(article.lastElementChild);

// Change h2 background color when clicked
const h2 = document.getElementById("ex1_h2");
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

// Hide h3 when clicked
const h3 = document.getElementById("ex1_h3");
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

// Button makes all paragraphs bold
const btn = document.getElementById("makeBold");
btn.addEventListener("click", () => {
    const paragraphs = document.querySelectorAll("article p");
    paragraphs.forEach(p => p.style.fontWeight = "bold");
});

// BONUS: Random font size on h1 hover
h1.addEventListener("mouseover", () => {
    h1.style.fontSize = Math.floor(Math.random() * 100) + "px";
});

// BONUS: Fade out second paragraph on hover
const secondP = document.querySelectorAll("article p")[1];
secondP.addEventListener("mouseover", () => {
    secondP.style.transition = "opacity 1s";
    secondP.style.opacity = "0";
});

// Exercises 2 

const form = document.getElementById("myForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

console.log(form);
console.log(fname, lname);
console.log(document.getElementsByName("firstname")[0]);
console.log(document.getElementsByName("lastname")[0]);

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstValue = fname.value.trim();
    const lastValue = lname.value.trim();

    if (firstValue === "" || lastValue === "") {
        alert("Please fill in all fields");
        return;
    }

    const ul = document.querySelector(".usersAnswer");
    ul.innerHTML = "";

    const li1 = document.createElement("li");
    li1.textContent = firstValue;

    const li2 = document.createElement("li");
    li2.textContent = lastValue;

    ul.appendChild(li1);
    ul.appendChild(li2);
});

// Exercise 3 

let allBoldItems = [];

function getBoldItems() {
    allBoldItems = document.querySelectorAll("#textParagraph strong");
}
getBoldItems();

function highlight() {
    allBoldItems.forEach(item => item.style.color = "blue");
}

function returnItemsToDefault() {
    allBoldItems.forEach(item => item.style.color = "black");
}

const paragraph = document.getElementById("textParagraph");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);

// Exercise 4 

const sphereForm = document.getElementById("sphereForm");

sphereForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const r = parseFloat(document.getElementById("radius").value);

    if (isNaN(r)) {
        alert("Please enter a valid number");
        return;
    }

    const volume = (4/3) * Math.PI * Math.pow(r, 3);
    document.getElementById("volume").value = volume.toFixed(2);
});