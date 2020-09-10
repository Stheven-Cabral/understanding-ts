// Custom types - you can name your types something else using custom typing, but that won't be useful. It is more useful to to use custom typing with union types.
// The 'Combinable' custom type can be used to type input1 and input2.
// The 'ConversionDescriptor' custom type can be used to type 'resultConversion'.
// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text';
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
greet({ name: 'Bob', age: 42 });
// Literal types - using values to define your types. i.e. in resultConverstion, you have a union type with two strings as types and it can only be one of those two.
function combiner(input1, input2, resultConversion) {
    var result;
    if (typeof (input1) === 'number' && typeof (input2) === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combiner(30, 26, 'as-number');
console.log(combinedAges);
var combinedAgeStrings = combiner('45', '60', 'as-number');
console.log(combinedAgeStrings);
var combinedNames = combiner('Bob', 'Ana', 'as-text');
console.log(combinedNames);
