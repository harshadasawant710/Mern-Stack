//reduce
//1
const arr = [2, 3, 4]
const multiplyArr = arr.reduce((acc, currIn) => acc * currIn, 1)
console.log(multiplyArr)

//2
const arr2 = ["hi", "welcome", "js"]
let arrLength = arr2.reduce((acc, currIn) => acc + currIn.length, 0)
console.log(arrLength)

//3
let arrString = arr2.reduce((acc, currIn) => acc === "" ? currIn : acc + "," + currIn)
console.log(arrString)

//4
const num2 = [1, 2, 3, 4, 5, 6, 8, 10]
const evenOdd = num2.reduce((acc, currIn) => {
  if (currIn % 2 === 0) {
    acc.even++;
  }
  else {
    acc.odd++;
  }
  return acc;
}, { even: 0, odd: 0 })
console.log(evenOdd)

//5
const word1 = ["hi", "hello", "js", "reduce"]
const wordSort = word1.reduce((acc, currIn) => {
  const allLength = currIn.length

  if (!acc[allLength]) {
    acc[allLength] = []
  }
  acc[allLength].push(currIn)
  return acc
}, {})

console.log(wordSort)

//6
const cart = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1500, qty: 1 },
  { name: "Cap", price: 200, qty: 3 }
];

const priceTotal = cart.reduce((acc, currIn) => acc + currIn.price * currIn.qty, 0)
console.log(priceTotal)

//7
const arr3 = [[1, 2], [3, 4], [5, 6]]
let flattedArr = arr3.reduce((acc, currIn) => acc.concat(currIn))
console.log(flattedArr)

//8
const num3 = [10, 5, 8, 20, 15]
const secondLg = num3.reduce((acc, currIn) => {
  if (currIn > acc.largest) {
    acc.second = acc.largest
    acc.largest = currIn
  } else {
    acc.second = currIn
  }
  return acc
}, { largest: -Infinity, second: -Infinity })

console.log(secondLg)

//9
const employees = [
 { name:"A", dept:"IT" },
 { name:"B", dept:"HR" },
 { name:"C", dept:"IT" },
 { name:"D", dept:"Finance" },
 { name:"E", dept:"HR" }
];

const dashboard = employees.reduce((acc, curr) => {
  const department = curr.dept;

  // 1. If this department doesn't exist in our object yet, create it
  if (!acc[department]) {
    acc[department] = { count: 0, employees: [] };
  }

  // 2. Increment the count
  acc[department].count += 1;

  // 3. Push the employee name into the array
  acc[department].employees.push(curr.name);

  // 4. CRITICAL: Always return the accumulator for the next loop
  return acc;
}, {}); // Start with an empty object {}

console.log(dashboard);