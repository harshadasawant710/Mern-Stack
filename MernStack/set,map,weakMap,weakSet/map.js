//map
//1
const user = new Map()
user.set('Name', 'Rahul')
user.set('Age', '25')
user.set('city', 'pune')
console.log(user)

//2
const userName = user.get('Name')
console.log(userName)

//3
const checkKey = user.has('Age')
console.log(checkKey)

//4
const mapSize = user.size
console.log(mapSize)

//5
for (const key of user.keys()) {
    console.log("5.", key);
}

//6
const user1 = { id: 1, name: "Harshada" };
const userRoles = new Map();
userRoles.set(user1, "Developer ");
console.log(userRoles.get(user1));

//7
const userObj = {
  name: "John",
  age: 30
};

const entries = Object.entries(userObj); 
const userMap = new Map(entries);
console.log(userMap.get("name")); 

//8
const userMapNew = new Map([
  ['name', 'John'],
  ['age', 30]
]);

const userObjNew = Object.fromEntries(userMapNew);

console.log(userObjNew); 

//9
const arr = [1, 2, 2, 3, 3, 3];
const freqMap = new Map();

for (const value of arr) {
    // 1. Get the current count from the map (or 0 if it doesn't exist yet)
    const currentCount = freqMap.get(value) || 0;

    // 2. Set the updated count back into the map
    freqMap.set(value, currentCount + 1);
}

// 3. To get your specific output format (Key → Value):
freqMap.forEach((count, num) => {
    console.log(`${num} → ${count}`);
});

//10
let string = "hello world hello js world"
string = string.split(' ')
console.log(string)
let wordCount = new Map()
for(let word of string){
    const currCount = wordCount.get(word) || 0;
    wordCount.set(word,currCount+1)
}
wordCount.forEach((count,words) => {
    console.log(`${words} = ${count}`)
})