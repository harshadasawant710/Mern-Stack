const arr = [10, 20, 30, 40, 50, 20, 70];
let str = "Good Morning everyone, lets discuss about javascript";
console.log("arr.length", arr.length);
console.log("str.length", str.length);

let sliceForArr = arr.slice(1, 3);
console.log("sliceForArr", sliceForArr);

sliceForArr = arr.slice(3, 6);
let sliceForStr = str.slice(0, 13);
console.log("sliceForStr", sliceForStr);

let isScored = arr.includes(70);
console.log("isScored", isScored);
isScored = arr.includes(200);
console.log("isScored", isScored);

let searchText = str.includes("discuss");
console.log("searchText", searchText);

searchText = str.includes("discuss   ");
console.log("searchText", searchText);

let indexOfScore = arr.indexOf(70);
console.log("indexOfScore", indexOfScore);

indexOfScore = arr.indexOf(20);
console.log("indexOfScore 20", indexOfScore);

let indexOfChar = str.indexOf("M");
console.log("indexOfChar", indexOfChar);


indexOfChar = str.indexOf("Morning");
console.log("indexOfChar", indexOfChar);

let lastIndexOfScore = arr.lastIndexOf(50);
console.log("lastIndexOfScore", lastIndexOfScore);
