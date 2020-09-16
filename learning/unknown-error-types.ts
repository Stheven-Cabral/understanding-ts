// UNKNOWN TYPE
let userInput: unknown;
// type unknown can be assigned any value type.
// It is similar to 'any' type but any has more fexibility as type checking is disabled. (View udemy course video 29 at 1:45)

let userName: string;
userInput = 5;
userInput = 'Max';
// Below we type checked 'userInput' because it is given a type of unknown. Unknown types are more restrictive and requires type checking in order for 'userName = userInput' to work.
// Due to the type checking, 'unknown' typing is better than 'any'.
if (typeof(userInput) === 'string') {
  userName = userInput;
}


// ERROR TYPE
// never typing never returns anything.
// Below, you can infer the type 'never' for the throw error function because when you throw an error, the script ends.
function generateError(message: string, code: number): never {
  // When you throw an error, it ends the function or crashes the script.
  throw { message: message, errorCode: code };
}

generateError('Error', 500);
