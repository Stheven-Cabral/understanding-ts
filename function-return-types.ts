// Functions can have return types and it can be viewed when hovering over the function name.
// Usually typescript can infer the result type based on if the parameters have similar types.
// The following would have a a return type of 'number'
function add(n1: number, n2: number) {
  return n1 + n2;
}

// The following has a return type of 'void' because it does not return anything.
function printResult(num: number) {
  console.log('Result: ' + num);
}
printResult(add(5, 12));

// You can also type functions using function types.
// View the following to know how to function type.
// The parameter name doesn't have to match the parameter name in 'add' function.
let combineValue: (a: number, b: number) => number;

combineValue = add;
// The following throws an error due to 'combineValue' having a function type.
// combineValue = printResult;


// In The following, you can add types to callbacks. 
// In this example callback returns void, so the function doesn't expect any result.
function addAndHandle (n1: number, n2: number, cback: (num: number) => void) {
  const result = n1 + n2;
  cback(result);
}

addAndHandle(10, 20, (num) => {
  console.log(num);
})