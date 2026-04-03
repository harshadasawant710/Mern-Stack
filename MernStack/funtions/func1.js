const person1 = {
    name:'Vishal',
    greet1: function(city, country){
        console.log(`HI, I am ${this.name} from ${city}, ${country}`)
    }
}

const person2 = {
    name:'Mayur',
}

person1.greet1("Solapur", "India");
// call
person1.greet1.call(person2, "Pune", 'UAE')

// apply 
const person3 = {
    name:'Yogesh',
}
person1.greet1.apply(person3, ["Hyderabad", 'USA']);

// bind
const person4 = {
    name:'Abhilash'
}

const borrowedFunction = person1.greet1.bind(person4);
console.log('borrowedFunction', borrowedFunction);
borrowedFunction('Delhi', 'Qatar')

let arr = [10, 20, 30, 40, 50];

let result = arr
    .filter(num => num > 20)
    .map(num => num * 2)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result);

function printEle(){
    const arr4 = [10, 20, 30, 40]
    arr4.forEach(element => {
        console.log(`Element is ${element}`)
        return result
    });
}
printEle()

const fruitArr = ["apple", "banana", "mango"]
const arrWithVal = fruitArr.forEach((value,index) =>{
    console.log(`${index} ${value}`) 
})

const num = [2, 5, -1, 9]
const findNeg = num.some(a => a > 0)
console.log(findNeg)

const num1 = [78, 55, 90, 34, 88]
const findPass = num1.every(a => a > 35)
console.log(findPass)

const num3 = [1, 7, 9, 4, 6]
const findEven = num3.find(a => a % 2===0)
console.log(findEven)

const numArr = [
 {id:1, name:"Anil"},
 {id:2, name:"Neha"},
 {id:3, name:"Rahul"}
]
const findId = numArr.find(a => a.id === 3 )
console.log(findId)

const num4 = [100, 5, 25, 8]
const setAssn = num4.sort((a ,b) => a -b )
console.log(setAssn)

const arr5 = [
 {name:"A", salary:50000},
 {name:"B", salary:30000},
 {name:"C", salary:70000}
]
const sortArr = arr5.sort((a,b) => a.salary - b.salary)
console.log(sortArr)

const arr6 = [
 {name:"Laptop", stock:5},
 {name:"Mouse", stock:0},
 {name:"Keyboard", stock:10}
]

const findStock = arr6.some(a => a.stock > 0)
console.log(findStock)

const arr7 = [1, 2, [3, 4], [5, 6]]
const flatArr = arr7.flat()
console.log(flatArr)

function one() {
  two();
}
function two() {
  console.log("Inside Two");
}
one();

function processData(data, callbackFunc) {
  console.log("Processing data:", data);
  callbackFunc(data);
}

function onCompleteProcess(data) {
  console.log("Data processing done successfully:", data);
}

function startNewProcess() {
  console.log("Starting new process");
}

processData("User Info", startNewProcess);
processData("User Info - 2",onCompleteProcess);

function greetMe(name) {
  return function () {
    console.log("good morning,", name);
  };
}

greetMe("Karn")(); // good morning, Karn

const getName = greetMe('harshada')
getName()



