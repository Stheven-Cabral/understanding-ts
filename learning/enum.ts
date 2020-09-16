// Behind the seens, admin receives 0, read_only receives 1, and author receives 2.
enum Role {ADMIN, READ_ONLY, AUTHOR};

// You can identify the start values of identifiers in an enum. You can also use strings as the identifiers value.
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR};

const ind = {
  name: 'Stheven',
  age: 30,
  hobbies: ['Cooking', 'Gaming'],
  // enum is accessed with property 'role'
  role: Role.ADMIN
};

if (ind.role === Role.ADMIN) {
  console.log('is admin');
}