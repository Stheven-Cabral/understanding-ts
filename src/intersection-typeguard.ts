type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Below is called an intersection type, so that when the object type is used, the requirements of the Employee and Admin type are both required.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}


// You can also use intersections with union types:
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addition(a: Combinable, b: Combinable) {
  // Checking the typeof of a property or variable is called 'type guarding'.
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}