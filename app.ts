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