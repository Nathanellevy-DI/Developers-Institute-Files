// Part I
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part II & III
setTimeout(() => {
    addParagraph();
}, 2000);

let intervalId = setInterval(addParagraph, 2000);

function addParagraph() {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);

    // Part III: Clear interval if 5 paragraphs
    const paragraphs = container.querySelectorAll("p");
    if (paragraphs.length >= 5) {
        clearInterval(intervalId);
    }
}

// Part III: Clear interval on button click
const button = document.getElementById("clear");
button.addEventListener("click", () => {
    clearInterval(intervalId);
});
