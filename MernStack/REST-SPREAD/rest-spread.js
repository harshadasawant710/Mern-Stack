//REST-SPREAD
//1
function sum(...num) {
    const total = num.reduce((acc, curr) => acc + curr, 0)
    console.log(total)
    return total
}
sum()
console.log(sum(1, 2, 3, 4))

//2
function findVal(...value) {
    const total = value.reduce((acc, curr) => acc + curr.length, 0)
    console.log(total)
    return total
}
findVal()
console.log(findVal("a", "b", "c", 'd'))

//3
function show(first, ...num) {
    console.log("First:", first);
    console.log("Rest:", num);
}
console.log(show(10, 20, 30, 40))

//4
function largestNum(...num) {
    if (num.length === 0) return "No numbers provided";
    const findLg = Math.max(...num);
    console.log(findLg);
    return findLg;
}
largestNum()
console.log(largestNum(10, 20, 30, 40))

//5
function addToCart(userName, ...items) {
    const itemCount = items.length;
    const updateCart = `${userName} added ${itemCount}`
    console.log(updateCart);
    return updateCart;
}
addToCart("Alice", "Apple", "Banana", "Cherry");
addToCart("Bob", "Laptop");

//6
const user = { id: 1, name: "Alex", password: "1234", role: "admin" };
const { password, ...updateWithoutPass } = user
console.log(updateWithoutPass);

//7
const copy = { ...user }
copy.name = 'Anil'
console.log(user.name, "here")

//8
const frontend = ["HTML", "CSS"]
const backend = ["Node", "DB"]
const merged = [...frontend, ...backend]
console.log(merged, "merged")

//9
const arr = [1, 2, 4, 5, 6]
const insertBet = [...arr.slice(0, 2), 3, ...arr.slice(2)]
console.log(insertBet)

//10
const product = {
    id: 1,
    name: "Laptop",
    price: 50000
};
const clone = { ...product, qty: 5, status: "active" }
console.log(clone)

//11
const config = { theme: "light", fontSize: 14 }
const newConfig = { ...config, theme: "dark" }
console.log(newConfig)

//12
const basic = { name: "Sam" }
const details = { age: 25, city: "Pune" }
const merged2 = { ...basic, ...details }
console.log(merged2)

//13
page1 = [1, 2]
page2 = [3, 4]
page3 = [5, 6]
const combin = [...page1, ...page2, ...page3]
console.log(combin)

//14
function result(...MERN) {
    const a = MERN.map((cap) => cap.toUpperCase())
    return a
}
console.log(result('mongodb', 'expressjs', 'reactjs', 'nodejs'))

//15
const state = { name: "User", loggedIn: false }
const stateChange = { ...state, loggedIn: true }
console.log(stateChange)

//16
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const mergedArray = [...new Set([...arr1, ...arr2])]
console.log(mergedArray)

//17
const employee = {
    id: 101,
    name: "John",
    salary: 50000,
    department: "IT"
}

const { id, ...remainingElements } = employee
console.log(id)
console.log(remainingElements)

//18
const calculateAvg = (...num2) => {
    if (num2.length === 0) return 0

    const sum = num2.reduce((acc, curr) => acc + curr, 0)
    return sum / num2.length
}

console.log(calculateAvg(10, 20, 30, 40))

//19
function multiply(a, b, c) {
    return a * b * c
}
const nums = [2, 3, 4]

const result1 = multiply(...nums)
console.log(result1)

//20
const original = {
    name: "Anil",
    skills: ["HTML", "CSS"]
};

const copys = { ...original };

copys.name = "Rahul";

copys.skills.push("JS");

console.log("Original:", original);
console.log("Copy:", copys);
/*
Primitives are Copied: The name property is a string (a primitive). When you used spread, 
JavaScript created a completely new "Rahul" in memory for the copy. 
Changing it did not affect the original.
References are Shared: The skills property is an array (an object). 
Spread only copies the memory address (the pointer) of that array.
The "Bridge": Because both original.skills and copy.skills point to the 
exact same spot in your computer's memory, adding "JS" to one makes it appear in both.
 */

//21
const mathUtility = {
    add: (...num) => {
        return num.reduce((a, b) => a + b, 0)
    },
    subtract:(...num) =>{
        if(num.length === 0) return 0;
        return num.reduce((total, number, index) => {
            return index === 0 ? number : total - number;
        })
    },
    multiplyAll: (...num) =>{
        if (num.length === 0) return 0;
        return num.reduce((total, number) => total * number, 1);
    }
}
console.log("Addition:", mathUtility.add(5, 10, 15, 20)); // 50
console.log("Subtraction:", mathUtility.subtract(100, 20, 10)); // 70
console.log("Multiplication:", mathUtility.multiplyAll(2, 3, 4)); // 24