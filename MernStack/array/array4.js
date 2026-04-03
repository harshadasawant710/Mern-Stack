let a = 10;
let b = a;

console.log('before a:', a)
console.log('before b:', b); //10

b=20;

console.log('after a:', a)
console.log('after b:', b); //10

let arr1 = [1,2,3];
let arr2 = arr1;

console.log('arr1 befere:', arr1)
console.log('arr2 befere:', arr2)

arr2.push(4)

console.log('arr1 after:', arr1)
console.log('arr2 after:', arr2)

let user1 = {
    name: 'Vishal'
}
let user2 = user1;

console.log('user1 befere:', user1)
console.log('user2 befere:', user2)


user2.city = 'Pune'

console.log('user1 after:', user1)
console.log('user2 after:', user2)