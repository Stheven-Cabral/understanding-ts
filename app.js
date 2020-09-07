// Behind the seens, admin receives 0, read_only receives 1, and author receives 2.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var ind = {
    name: 'Stheven',
    age: 30,
    hobbies: ['Cooking', 'Gaming'],
    // enum is accessed with property 'role'
    role: Role.ADMIN
};
if (ind.role === Role.ADMIN) {
    console.log('is admin');
}
