//  Exercise 3 : JSON Mario

const marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
};

//  Convert to normal JSON string
const jsonMario = JSON.stringify(marioGame);
console.log("JSON Mario:", jsonMario);

//  Convert to pretty JSON (easy to read)
const prettyMario = JSON.stringify(marioGame, null, 2);
console.log("Pretty JSON Mario:\n", prettyMario);

//  You can add a breakpoint in DevTools to inspect values
//    Example line to set a breakpoint on:
debugger;

console.log("Debugger activated. Inspect jsonMario & prettyMario above.");
