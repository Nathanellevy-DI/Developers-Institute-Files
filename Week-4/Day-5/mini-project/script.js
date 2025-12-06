const btn = document.getElementById("getCharacterBtn");
const resultBox = document.getElementById("resultBox");

// Get a random ID between 1 and 83 (SWAPI has 83 characters)
function getRandomID() {
  return Math.floor(Math.random() * 83) + 1;
}

// Fetch character info
async function getCharacter() {
  try {
    resultBox.innerHTML = `<i class="fas fa-spinner fa-spin loading"></i>`;

    const randomId = getRandomID();
    const url = `https://www.swapi.tech/api/people/${randomId}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Could not fetch character");
    }

    const data = await response.json();
    const info = data.result.properties;

    // Fetch homeworld URL
    const home = await fetch(info.homeworld);

    if (!home.ok) {
      throw new Error("Homeworld fetch error");
    }

    const homeData = await home.json();
    const homeName = homeData.result.properties.name;

    displayCharacter(info, homeName);

  } catch (error) {
    resultBox.innerHTML = `
      <p class="error">⚠️ Error: Could not retrieve data</p>
    `;
  }
}

// Display character info on the DOM
function displayCharacter(info, homeworld) {
  resultBox.innerHTML = `
    <div class="character-info">
      <p><strong>Name:</strong> ${info.name}</p>
      <p><strong>Height:</strong> ${info.height}</p>
      <p><strong>Gender:</strong> ${info.gender}</p>
      <p><strong>Birth Year:</strong> ${info.birth_year}</p>
      <p><strong>Homeworld:</strong> ${homeworld}</p>
    </div>
  `;
}

// Button event listener
btn.addEventListener("click", getCharacter);
