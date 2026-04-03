//1
let numbers = [10, 20, 30, 45];
let doubleNum = numbers.map(a => {
  let result = a * 2
  return result
})
console.log(doubleNum)

//2
let stringNum = numbers.toString('')
console.log(stringNum)

//3
const numbers2 = [1, 2, 3, 4, 5, 6];
let filterNum = numbers2.filter(a => {
  let result = a % 2 == 0
  return result
})
console.log("filterNum", filterNum)

//4
const number = [-5, 10, -2, 0, 15];
let filterNeg = number.filter(a => {
  let result = a >= 1
  return result
})
console.log("filterNeg", filterNeg)

//5
const names = ["Rahul", "Amit", "Suresh"];
let stringName = names.map(a => {
  return `Mr.${a}`
})
console.log(stringName)

//6
const words = ["apple", "banana", "kiwi"];
let wordlength = words.map(word => word.length)
console.log(wordlength)

//7
const marks = [35, 60, 42, 25, 80];
let isPass = marks.filter(a => {
  let result = a > 35
  return result
})
console.log(isPass)

//8
const numberSQ = [1, 2, 3, 4, 5];
let num = numberSQ.filter(a => a % 2 === 0).map(a => a * a)

console.log(num)

//9
const prices = [100, 200, 300];
let gstPrice = prices.map(a => a * 1.18)
console.log(gstPrice)

//10
const users = [
  { id: 1, name: "Anil", age: 25 },
  { id: 2, name: "Sunil", age: 30 },
  { id: 3, name: "Ravi", age: 15 }
];

let namesOnly = users.map((user) => user.name)
console.log(namesOnly)

//11 //12
let nameAdult = users.filter((user) => user.age >= 18).map((user) => user.name)
console.log(nameAdult)

//13
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 15000 }
];

const updatedProducts = products.map((product) => {
  return {
    ...product,
    price: product.price * 1.10
  };
});

console.log(updatedProducts);

//14
const proGrt = updatedProducts.filter((product) => product.price > 20000)
console.log(proGrt)

//15
const students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 35 },
  { name: "Karan", marks: 70 },
  { name: "Priya", marks: 40 }
];

let whoPassed = students.filter((student) => student.marks >= 40)
console.log(whoPassed)

let allCap = students.map((student) => student.name.toUpperCase())
console.log(allCap)

//16
const scores = [25, 45, 60, 30, 80, 50];
let funChaining = scores.filter((score) => score > 40).map((score) => score + 5)
console.log(funChaining)


const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

const numbers1 = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
  sum += numbers1[i]
}
console.log(sum)

const nums = [1, 2, 3, 4, 5, 6];
let even = 0
for (let i = 0; i < nums.length; i++) {
  if (num[i] % 2 !== 0) {
    even = num[i]
    continue;
  }
  console.log(num)
}

const names1 = ["Ram", "Shyam", "Sita", "Gita"];
let found = 0
for (let i = 0; i < names1.length; i++) {
  if (names1[i] === 'shyam') {
    console.log("Found:", names[i]);
    found = names1[i]
    break;
  }
  console.log(found)
}

const greet = function greetUser(name) {
  console.log("Hello, " + name);

};

// greet("Rahul");
// greetUser("Pritee");// error


let arr8 = [5, 8, 2, 10];
let findMax = arr8.reduce((acc, curr) => curr > acc ? curr : acc)
console.log(findMax)

let arr9 = ["hello world", "js is fun"];
const flatMaped = arr9.flatMap((str => str.split(" ")))
console.log(flatMaped)

let arr10 = [10, 20, 30, 40, 50];

let result = arr
    .filter(num => num > 20)
    .map(num => num * 2)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result);

let topperNames = students
    .filter(student => student.marks > 60)
    .map(student => student.name);

console.log(topperNames);

Output:
["Rohan", "Neha"]





