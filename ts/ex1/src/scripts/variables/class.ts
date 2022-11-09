export default function defineClass() {
  class Person {
    private name: string;
    private age: number;
    protected code: string;

    constructor(name: string = "", age: number = 1) {
      this.name = name;
      this.age = age;
      this.code = "13";
    }

    getName(): string {
      return this.name;
    }

    getAge(): number {
      return this.age;
    }

    getCode(): string {
      return this.code;
    }

    toString(): string {
      return `${this.name} ${this.age}`;
    }
  }

  class Employee extends Person {
    private salary: number;
    constructor(name: string = "", age: number = 1, salary: number = 1.0) {
      super(name, age);
      this.salary = salary;
      this.code = "12333";
    }

    toString(): string {
      return `${super.getName()} ${super.getAge()} ${this.code}`;
    }
  }

  const employee = new Employee("Duong", 21, 1.009);
  console.log(employee.toString());
}
