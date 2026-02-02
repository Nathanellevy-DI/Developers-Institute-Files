// Daily Challenge: Union Type Validator

function validateUnionType(value: any, allowedTypes: string[]): boolean {
  const valueType = typeof value;

  for (let type of allowedTypes) {
    if (valueType === type) {
      return true;
    }
  }

  return false;
}

// Examples / Demonstration

const nameValue = "Nate";        // string
const ageValue = 17;             // number
const isStudent = true;          // boolean
const items = ["a", "b", "c"];   // array → typeof "object"

console.log(validateUnionType(nameValue, ["string", "number"]));
// true

console.log(validateUnionType(ageValue, ["string"]));
// false

console.log(validateUnionType(isStudent, ["boolean", "object"]));
// true

console.log(validateUnionType(items, ["string"]));
// false

console.log(validateUnionType(items, ["object"]));
// true
