// type casting is telling typescript that a value is of a specific type where TS is not able to detect it on its own but tells the developer that it will be the case.
// A good example of this is when you have a element in the DOM.
const paragraph = document.querySelector('p');

// TS won't be able to find the element by ID.
// The text inside the arrow brackets is called type casting. It tells TS what type of element you are retrieving.
// Also, type casting can be used only if the 'dom' lib is added to the tsconfig.json file.
// userInputElement = <HTMLInputElement>document.getElementById('message-output')!;

// The below syntax using 'as' is the same as the above type casting syntax.
// userInputElement = document.getElementById('message-output')! as <HTMLInputElement>;
// userInputElement.value = "Hi there";