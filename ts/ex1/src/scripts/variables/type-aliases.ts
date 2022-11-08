/**
 * Type Aliases
 *
 * You can define a new type using the type . keyword
 *
 * type data_name = data_type
 */

export default function defineTypeAliases() {
  // Object Person type
  type Person = {
    name: string;
    age: number;
  };
  const employee: Person = {
    name: "Pham Tan Duong",
    age: 21,
  };
  console.log("employee", employee);

  // String type
  type newString = string;
  const fname: newString = "Pham Tan";
  const lname: newString = "Duong";
  console.log(fname, lname);

  // Number type
  type newNumber = number;
  const num: newNumber = 1;
  console.log(num);

  // Boolean type
  type newBoolean = boolean;
  const b: newBoolean = true;
  console.log(b);

  // Date type
  type newDate = Date;
  const date: newDate = new Date();
  console.log(date);

  // Test type aliases
  /**
   * type Window = {
    title: string;
  };

  type Window = {
    ts: TypeScriptAPI;
  };
   *  Can't create 2 styles with the same name
   */
}
