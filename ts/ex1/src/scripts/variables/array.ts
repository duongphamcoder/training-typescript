export default function defineArray() {
  //normally array
  const ones = [1, 2, 4, 5];
  console.log("ones", ones);
  // string array
  const twos: Array<String> = ["a", "d", "e"];
  console.log("twos", twos);
  // string array
  const threes: Array<Number> = [12, 3, 1, 2, 4];
  console.log("threes", threes);

  // define any type
  type Person = {
    name: String;
  };
  // object array
  const fours: Array<Person> = [
    {
      name: "Duong",
    },
    {
      name: "Anh",
    },
  ];
  console.log("fours", fours);
}
