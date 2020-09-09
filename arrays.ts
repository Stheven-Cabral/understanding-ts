const individual: {
  name: string;
  age: number;
  hobbies: string[];
  // Below, we infer role as a tuple type with only two values, the first a number and second a string.
  // Inferring your own types is important when you want to specific with your properties.
  role: [number, string]
} = {
  name: 'Stheven',
  age: 30,
  hobbies: ['Cooking', 'Gaming'],
  role: [2, 'author']
};

// Even though your tuple only has two values, it doesn't catch the push method pushing another value to a tuple that only is limited to two values. It is something you need to be aware of.
individual.role.push('admin');

// favoriteActivities accepts only strings in its array.
let favoriteActivities: string[];
// favoriteActivities accepts any data type in its array due to 'any[]'.
let randomArray: any[];

// map() would not work on 'individual.hobbies' because hobbies have a type of 'string[]' and map() only works on arrays.
// https://www.w3schools.com/js/js_loop_for.asp  explains 'for of' loop. 
for (const hobby of individual.hobbies) {
  console.log(hobby);
}