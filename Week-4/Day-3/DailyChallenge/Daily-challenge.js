//  Daily Challenge 1 

// Function 1: makeAllCaps()
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        // Check that all items are strings
        const allStrings = words.every(item => typeof item === "string");

        if (!allStrings) {
            reject("Error: Not all items are strings");
        } else {
            const uppercased = words.map(word => word.toUpperCase());
            resolve(uppercased);
        }
    });
}

// Function 2: sortWords()
function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject("Error: Array length is not big enough");
        }
    });
}


// Tests
makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));




// Daily Challenge 2

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;


// Function 1: toJs()
function toJs() {
    return new Promise((resolve, reject) => {
        const morseJs = JSON.parse(morse);

        if (Object.keys(morseJs).length === 0) {
            reject("Error: Morse object is empty");
        } else {
            resolve(morseJs);
        }
    });
}


// Function 2: toMorse()
function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const userInput = prompt("Enter a word or sentence").toLowerCase();
        const result = [];

        for (let char of userInput) {
            if (!morseJS[char]) {
                reject(`Error: Character '${char}' is not in Morse dictionary`);
                return;
            }
            result.push(morseJS[char]);
        }

        resolve(result);
    });
}


// Function 3: joinWords()
function joinWords(morseTranslation) {
    const output = morseTranslation.join("\n");

    // Display on the page
    const div = document.createElement("div");
    div.textContent = output;
    document.body.appendChild(div);
}


// Chain the functions
toJs()
    .then(result => toMorse(result))
    .then(morseArr => joinWords(morseArr))
    .catch(error => console.log(error));
