
// Exercise 1
type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "John",
  age: 30,
  street: "Main Street",
  city: "Tel Aviv"
};

// Exercise 2

function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  } else {
    return "This is a string";
  }
}

// Exercise 3

let someValue: any = "Hello TypeScript";

let stringValue: string = someValue as string;

console.log(stringValue.toUpperCase());

// Exercise 4

function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}
// Exercise 5

function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}
// Exercise 6

type Job = {
  position: string;
  department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
  if (employee.position === "Manager") {
    return `${employee.name} is a Manager in the ${employee.department} department.`;
  }

  if (employee.position === "Developer") {
    return `${employee.name} is a Developer working in the ${employee.department} department.`;
  }

  return `${employee.name} works in the ${employee.department} department.`;
}


// Exercise 7

function formatInput<T extends { toString(): string }>(input: T): string {
  const valueAsString = input.toString() as string;
  return `Formatted value: ${valueAsString}`;
}





