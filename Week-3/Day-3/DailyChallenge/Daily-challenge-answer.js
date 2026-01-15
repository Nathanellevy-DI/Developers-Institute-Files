// STEP 1: Array of planet objects
const planets = [
    { name: "Mercury", moons: 0, color: "gray" },
    { name: "Venus", moons: 0, color: "orange" },
    { name: "Earth", moons: 1, color: "blue" },
    { name: "Mars", moons: 2, color: "red" },
    { name: "Jupiter", moons: 79, color: "brown" },
    { name: "Saturn", moons: 83, color: "gold" },
    { name: "Uranus", moons: 27, color: "lightblue" },
    { name: "Neptune", moons: 14, color: "purple" }
];

// STEP 2: Select the section container
const section = document.querySelector(".listPlanets");

// STEP 3: Loop through each planet
planets.forEach((planet) => {

    // Create the planet div
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    // STEP 4: Create moons if the planet has any
    for (let i = 0; i < planet.moons; i++) {
        const moon = document.createElement("div");
        moon.classList.add("moon");

        // simple positioning so moons don't sit on top of each other
        moon.style.left = 120 + (i * 40) + "px";
        moon.style.top = "35px";

        planetDiv.appendChild(moon);
    }

    // STEP 5: Append the planet to the page
    section.appendChild(planetDiv);
});
