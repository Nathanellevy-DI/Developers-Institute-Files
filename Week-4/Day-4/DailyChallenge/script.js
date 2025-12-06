const form = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// FETCH RANDOM GIF BY CATEGORY
async function getRandomGif(searchTerm) {
  try {
    const url = `https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();

    // Extract the GIF URL from images.original.url
    const gifUrl = data.data.images.original.url;

    appendGif(gifUrl);

  } catch (error) {
    console.log("Error:", error);
  }
}

// APPEND GIF TO PAGE
function appendGif(url) {
  const wrapper = document.createElement("div");
  wrapper.style.marginBottom = "20px";

  const img = document.createElement("img");
  img.src = url;
  img.width = 200;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", () => {
    wrapper.remove(); // remove selected gif
  });

  wrapper.appendChild(img);
  wrapper.appendChild(deleteBtn);

  gifContainer.appendChild(wrapper);
}

// FORM SUBMIT
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchValue = searchInput.value.trim();

  if (searchValue !== "") {
    getRandomGif(searchValue);
    searchInput.value = "";
  }
});

// DELETE ALL BUTTON
deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
