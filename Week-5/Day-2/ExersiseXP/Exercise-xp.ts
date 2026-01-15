//  Exercise 1: Class with Access Modifiers

class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}

const emp1 = new Employee("Alice", 50000, "Developer", "IT");
console.log(emp1.getEmployeeInfo());




//  Exercise 2: Readonly Properties in a Class

class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getProductInfo(): string {
    return `${this.name} costs $${this.price}`;
  }
}

const product1 = new Product(101, "Laptop", 1200);
console.log(product1.getProductInfo());

// product1.id = 999; // ❌ ERROR: Cannot assign to 'id' because it is a read-only property.




//  Exercise 3: Class Inheritance

class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): string {
    return "Some generic animal sound";
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): string {
    return "bark";
  }
}

const dog = new Dog("Buddy");
console.log(dog.makeSound());




// Exercise 4: Static Properties and Methods

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}

console.log(Calculator.add(5, 3));
console.log(Calculator.subtract(10, 4));




//  Exercise 5: Extending Interfaces with Optional and Readonly Properties

interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string; // optional
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Membership: ${user.membershipLevel ?? "None"}`);
}

const premiumUser: PremiumUser = {
  id: 1,
  name: "Nate",
  email: "nate@example.com",
  membershipLevel: "Gold",
};

printUserDetails(premiumUser);
