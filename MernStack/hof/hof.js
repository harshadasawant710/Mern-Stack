//1
const input = [10, 20, 30, 40]
input.forEach(a => console.log('Element is', a))

//2
const fruits = ["apple", "banana", "mango"]
fruits.forEach((value, index) => { console.log(index, '->', value) })

//3
const num = [2, 5, -1, 9]
let negNum = num.some(num => num < 0)
console.log(negNum)

//4
const marks = [78, 55, 90, 34, 88]
let allPass = marks.every(num => num > 35)
console.log(allPass)

//5
const num1 = [1, 7, 9, 4, 6]
let evenNum = num1.find(num => num % 2 === 0)
console.log(evenNum)

//6
const data = [
    { id: 1, name: "Anil" },
    { id: 2, name: "Neha" },
    { id: 3, name: "Rahul" }
]

const findUser = data.find((a) => a.id === 3)
console.log(findUser)

//7
const number = [100, 5, 25, 8]
const sortNum = number.sort((a,b) => a-b)
console.log(sortNum)

//8
const salaryData = [
 {name:"A", salary:50000},
 {name:"B", salary:30000},
 {name:"C", salary:70000}
]
const sortData = salaryData.sort((a,b) => a.salary - b.salary)
console.log(sortData)

//9
const product = [
 {name:"Laptop", stock:5},
 {name:"Mouse", stock:0},
 {name:"Keyboard", stock:10}
]
const findStock = product.some(a => a.stock === 0)
console.log(findStock)

//10
const arr = [1, 2, [3, 4], [5, 6]]
const flatArr = arr.flat()
console.log(flatArr)
