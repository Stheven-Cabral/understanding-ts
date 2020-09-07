// You can specify the type of a parameter using a ':' .
// If you call the function below with a non-number, it will return errors.
// Typescript doesn't help with the runtime code. It will still compile the js file.
// It is useful during development.
// JavaScript uses dynamic types (resolved during runtime), while typescript uses static types (resolved during development).
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
