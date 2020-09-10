// Union types can help us tell typescript that a function can accept two or more types for a parameter.
// To use a union type, use the pipe symbol '|'
function combine(input1: number | string , input2: number | string) {
  let result;

  // The if else statement is a runtime check because the following function will throw an error due to the union types.
  if(typeof(input1) === 'number' && typeof(input2) === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Bob', 'Ana');
console.log(combinedNames);