// An interface describes the structure of an object. They are not used as a object blueprint.
// Interfaces are only part of TS.
// You won't interfaces in TS files compiled to JS.

interface Named {
    // You can add 'readonly' modifier in front of properties so that it can only be used once.
    name: string;
    // readonly name: string;
    // The '?' identifies that the 'outputName' property is optional.
    outputName?: string;
}

// In the below interface, you can see that 'Greetable' can extend the 'Named' interface.
interface Greetable extends Named {
  // You can describe the properties of the Person interface but you cannot assign it a value.
  // Notice the commas.
  // private and public modifiers are not allowed in interfaces.
  greet(phrase: string): void;  
}

// You can also use interfaces to describe the structure of classes using the keyword 'implements' then the interface name.
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log('This is the phrase: ' + phrase);
  }
}


// You can use the interface above to type check an object.
// Bellow, the interface above ensures the object below uses the correct types in its properties and methods.
let user1: Greetable;
user1 = {
  name: 'Max',
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

// The below works because the Person class satisfies the requirements of the Greetable interface.
user1 = new Person('Max');


// YOU CAN ALSO INTERFACE FUNCTIONS
type AddFn = (a: number, b: number) => number;
// Below is an interface for a function.
// interface AddFn {
//   (a: number, b: number): number;
// }

let combined: AddFn;

combined = (n1: number, n2: number) => {
  return n1 + n2;
};