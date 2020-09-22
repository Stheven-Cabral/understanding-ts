// Decorator factories give you more control of what decorators do.
// View decorator factory below.
function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

// You must add the @DecoratorName above the class you want to add a decorator to.
// The 'Logger' decorator will still accept the class' constructor.
@Logger('LOGGING - PERSON')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating a person object...');
  }
}

const pers = new Person();

console.log(pers);