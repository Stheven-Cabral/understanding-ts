// An array is a type of generic.
// A generic is a data type that holds other data types, and it doesn't care what data types are in it.
// An example of a generic type is:
const names: Array<string | number> = [];

// JavaScript's promises are also generic type.
const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done");
  }, 2000);
});

// You can create your generic objects and functions
// The types T and U are set when you call the function.
function merge<T, U>(objA: T, objB: U) {
  // assign() can only merge objects.
  return Object.assign(objA, objB);
}

// You can use constraints to the merge function above if you want to add more rules.
// Generrics can also extend interfaces.
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

const mergedObj = merge({name: 'Max'}, {job: 'Painter'});