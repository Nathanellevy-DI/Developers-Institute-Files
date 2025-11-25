const form = document.getElementById("libform");
const storySpan = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle-button");

let savedWords = {}; // will store the values

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    // check empty
    if (!noun || !adjective || !person || !verb || !place) {
        storySpan.textContent = "Please fill in all the fields.";
        return;
    }

    // save values for shuffle use later
    savedWords = { noun, adjective, person, verb, place };

    // create initial story
    storySpan.textContent = generateStory(savedWords);
});

shuffleBtn.addEventListener("click", function() {
    // only shuffle if we already submitted once
    if (!savedWords.noun) {
        storySpan.textContent = "Submit the form first!";
        return;
    }

    storySpan.textContent = generateStory(savedWords);
});

function generateStory(words) {
    const stories = [
        `${words.person} took a ${words.adjective} ${words.noun} and decided to ${words.verb} all the way to ${words.place}.`,
        `In ${words.place}, a ${words.adjective} ${words.noun} made ${words.person} ${words.verb} uncontrollably.`,
        `${words.person} found a ${words.noun} that was so ${words.adjective}, it made them ${words.verb} right in the middle of ${words.place}.`
    ];

    // pick a random one
    const randomIndex = Math.floor(Math.random() * stories.length);
    return stories[randomIndex];
}
