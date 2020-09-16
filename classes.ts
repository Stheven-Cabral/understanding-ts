class Department {
  // 'name' and 'employees' are fields that are declared. Also known as 'declared fields'.
  // Declaring fields is optional and they can be defined in the constructor.
  // private name: string;
  // The word private before the property indicates that employees is only accessible inside the class and through class methods.
  // private employees: string[] = [];
  // 'protected' allows a property to be accessed not only within the parent class, but also inherited classes.
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // The 'readonly' modifier tells TS that the id can no longer be modified.
    this.id = id;
    this.name = name;
  }

  // Typing the following method with this: Department tells TS that when you use one of its class properties such as 'this.name" you are referring to an instance of Department.
  describe(this: Department) {
    console.log('Department: ' + this.name, 'Department ID: ' + this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const accounting = new Department('1de32', 'Accounting');

// CLASS INHERITANCE
// Inherited classes inherit the parent classes constructor.
class ITDepartment extends Department {
  // Since id has a 'private' modifier from the parent class, we have to give 'admins' a modifier of 'public' or you will get errors
  constructor(id: string, public admins: string[]) {
    // super extends any paramters enter in the super parenthesis to the constructor of the the parent class.
    super(id, 'IT');
    this.admins = admins;
  }

  addEmployee(name: string) {
    if(name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
}

const accountingIT = new ITDepartment('dsdad3', ['Max', 'Cheyenne'])