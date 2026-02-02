// EXERCISE 1 : List of people


console.log("Exercise 1");

let people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove “Greg”
people.shift();

// 2. Replace “James” with “Jason”
let indexJames = people.indexOf("James");
people[indexJames] = "Jason";

// 3. Add your name to the end
people.push("Nathaniel");  // ← replace with your name

// 4. Console.log Mary’s index
let maryIndex = people.indexOf("Mary");
console.log("Mary index is:", maryIndex);

// 5. Copy array without Mary or your name
// people = ["Mary", "Devon", "Jason", "Nathaniel"]
let peopleCopy = people.slice(1, 3); // from index 1 to index 3 (not included)
console.log("Copy:", peopleCopy);

// 6. Index of “Foo”
let fooIndex = people.indexOf("Foo");
console.log("Foo index:", fooIndex);
// returns -1 because Foo is not in the array

// 7. Last element
let last = people[people.length - 1];
console.log("Last element:", last);


// - Part 2 

// Loop through the array
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// Loop until Devon
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}






// EXERCISE 2 : Favorite colors


console.log("\nExercise 2");

let colors = ["blue", "red", "black", "white", "green"];

// Simple loop
for (let i = 0; i < colors.length; i++) {
    console.log("My #" + (i + 1) + " choice is " + colors[i]);
}

// Bonus: suffix array
let suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    let number = i + 1;
    let suffix = suffixes[i];
    console.log("My " + number + suffix + " choice is " + colors[i]);
}






// EXERCISE 3 : Repeat the question


console.log("\nExercise 3");

// Only works in a browser
// Uncomment when using HTML + script

/*
let num = prompt("Enter a number");

while (Number(num) < 10) {
    num = prompt("Enter a number again (must be 10 or more)");
}
*/






// EXERCISE 4 : Building Management


console.log("\nExercise 4");

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500]
    }
};

// 1. Floors
console.log("Number of floors:", building.numberOfFloors);

// 2. Apts on floor 1 and 3
console.log("Apts on 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apts on 3rd floor:", building.numberOfAptByFloor.thirdFloor);

// 3. Second tenant and his rooms
let second = building.nameOfTenants[1]; // "Dan"
let danRooms = building.numberOfRoomsAndRent["dan"][0];
console.log("Second tenant:", second, "Rooms:", danRooms);

// 4. Check rent
let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log("Updated rents:", building.numberOfRoomsAndRent);






// EXERCISE 5 : Family


console.log("\nExercise 5");

let family = {
    dad: "John",
    mom: "Emma",
    sister: "Lily"
};

// Print keys
for (let key in family) {
    console.log("Key:", key);
}

// Print values
for (let key in family) {
    console.log("Value:", family[key]);
}






// EXERCISE 6 : Rudolf


console.log("\nExercise 6");

const details = {
    my: "name",
    is: "Rudolf",
    the: "reindeer"
};

let sentence = "";

for (let key in details) {
    sentence = sentence + key + " " + details[key] + " ";
}

console.log(sentence.trim());






// EXERCISE 7 : Secret Group


console.log("\nExercise 7");

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = [];

// take first letter of each name
for (let i = 0; i < names.length; i++) {
    secretName.push(names[i][0]);
}

secretName.sort();

let society = secretName.join("");

console.log("Secret group name:", society);
