// Logger functions are functions that run when the class it is decorating is or in the below case the constructor it is decorating is found.
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

// You must add the @DecoratorName above the class you want to add a decorator to.
@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating a person object...');
  }
}

const pers = new Person();

console.log(pers);


// ---------
// You can add this decorator to properties using the syntax below.
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  // Setters are called as properties.
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}