// index properties allow you to create an interface, in which you don't know the property names yet.

interface ErrorContainer {
  // THe word 'prop' is arbitrary.
  [prop: string]: string;
} 

const errorBag: ErrorContainer = {
  error1: 'Not a valid email'
}