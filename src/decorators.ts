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