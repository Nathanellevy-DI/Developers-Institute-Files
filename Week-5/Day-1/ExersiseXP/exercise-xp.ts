//  Exercise 1: Hello, World!
console.log("Hello, World!");



//  Exercise 2: Type Annotations
let age: number = 17;
let nameValue: string = "Nathanel";
console.log("Age:", age);
console.log("Name:", nameValue);



//  Exercise 3: Union Types
let id: string | number;
id = "ABC123";
console.log("ID:", id);
id = 42;
console.log("ID:", id);



//  Exercise 4: Control Flow with if...else
function checkNumber(num: number): string {
  if (num > 0) {
    return "The number is positive";
  } else if (num < 0) {
    return "The number is negative";
  } else {
    return "The number is zero";
  }
}
console.log(checkNumber(10));
console.log(checkNumber(-3));
console.log(checkNumber(0));



//  Exercise 5: Tuple Types
function getDetails(name: string, age: number): [string, number, string] {
  const message = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, message];
}

const details = getDetails("Alice", 25);
console.log(details); 
// ['Alice', 25, 'Hello, Alice! You are 25 years old.']



//  Exercise 6: Object Type Annotations
type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return { name, age };
}

const person1 = createPerson("Bob", 30);
console.log(person1);



//  Exercise 7: Type Assertions
// (For this exercise, assume you have an HTML file with an input element)

// Example:
// const input = document.getElementById("myInput") as HTMLInputElement;
// input.value = "Hello from TypeScript!";


// To prevent TypeScript errors in environments without DOM:
const fakeInput = {
  value: "",
} as HTMLInputElement;

fakeInput.value = "Type assertion working!";
console.log(fakeInput.value);



//  Exercise 8: switch Statement with Complex Conditions
function getAction(role: string): string {
  switch (role) {
    case "admin":
      return "Manage users and settings";

    case "editor":
      return "Edit content";

    case "viewer":
      return "View content";

    case "guest":
      return "Limited access";

    default:
      return "Invalid role";
  }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));



//  Exercise 9: Function Overloading with Default Parameters
function greet(): string;
function greet(name: string): string;

function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
  return "Hello, there!";
}

console.log(greet()); 
console.log(greet("Nate"));
