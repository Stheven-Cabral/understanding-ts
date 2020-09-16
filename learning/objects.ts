// The following typing only tells typescript that 'person' is an object, but doesn't infer which keys and types are in that object that is why 'nickname' results in an error.
// const person: object = {
//   name: 'Stheven',
//   age: 30
// };

// console.log(person.nickname);


// Below you tell typscript that person as an object type, and then you infer what they keys are and the value types.
// Typescript does the below automatically so the code after is better, as you don't infer any object types.
// const person: {
//   name: string;
//   age: number
// } = {
//   name: 'Stheven',
//   age: 30
// };

// console.log(person.name);

const person = {
  name: 'Stheven',
  age: 30
};

console.log(person.name);