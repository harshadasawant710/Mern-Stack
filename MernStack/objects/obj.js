//1
const objToJSON = { name: "Rahul", age: 25, city: "Pune" }
const result = JSON.stringify(objToJSON)
console.log(result)

//2
let data = '{"product":"Laptop","price":55000}';
const result1 = JSON.parse(data)
console.log(result1)

//3
let user = {
  name: "Amit",
  address: {
    city: "Mumbai"
  }
};

console.log(user?.address?.city)
console.log(user?.contact?.phone)

//4
let student = {
  name: "Neha"
};
// if(!student?.address?.city){
// console.log("City not available")
// }

const city = student?.address?.city ?? 'City not available';
console.log(city)

//5
let original = {
  name: "Raj",
  skills: ["JS", "React"]
};

// const shallowCopy = {... original}
// copy.skills.push('Node')
// console.log(shallowCopy.skills)

//6
const copy = JSON.parse(JSON.stringify(original))
copy.skills = "Node"
console.log(original.skills)

//7
let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const allUsers = JSON.stringify(users)
console.log(allUsers)

const allUsers2 = JSON.parse(allUsers)
console.log(allUsers2[1]?.name)

//8
let response = '{"status":true,"data":{"user":{"name":"Kiran","email":"kiran@gmail.com"}}}';
const toObj = JSON.parse(response)
console.log(toObj?.data?.user?.mail ?? "email not found")

//9
let a = {
  id: 1,
  details: {
    city: "Delhi"
  }
};
let b = { ...a };
b.details.city = "Chennai";

console.log(a.details.city);
/* The reason is the Shallow Copy Trap. When you use the spread operator (...), JavaScript only copies the first level of properties.
Level 1 (The id): This is a primitive value (a number). It is copied by value. If you changed b.id, a.id would stay the same.
Level 2 (The details object): This is a reference type. Instead of creating a brand new details object, the spread operator simply copies the memory address (reference) of the existing details object.
Because both a.details and b.details point to the exact same "box" in your computer's memory, changing a property inside that box reflects in both variables.*/

//10
let obj = {
  name: "Test",
  nested: { value: 10 }
};

const deepCopy = JSON.parse(JSON.stringify(obj))
deepCopy.name = 'rest'
console.log(obj.name)
console.log(deepCopy.name)