const studentList = ["Amit", "Abhi", "Shubham"];
console.log("typeof studentList", typeof studentList);

let type = Array.isArray(studentList);
console.log("type", type);

const numbers = [10, 20, 30, 40, 50, 60, 70];
let sliceNum = numbers.slice(1,4)
console.log("sliceNum",sliceNum)

let removed = numbers.splice(1, 2);
console.log('removed', removed);

let add = numbers.splice(1, 0, 15, 25, 35)
console.log('add', add);
console.log('after add numbers', numbers)

let update = numbers.splice(4, 4, 45, 55, 65, 75)
console.log('update', update);
console.log('after update numbers', numbers)