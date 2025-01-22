const data = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];

// Using array and object destructuring
const [firstPerson] = data;  // Extract the first element of the array
const { name, age } = firstPerson;  // Destructure name and age from the first object

console.log(name);  // "John"
console.log(age);   // 30
