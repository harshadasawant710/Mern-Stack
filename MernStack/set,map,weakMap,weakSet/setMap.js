//1
const set = new Set([1, 2, 3, 3, 4, 4, 5])
console.log(set, 'set')

//2
const unique = [...new Set("javascript")].join(' ');
console.log(unique)

//3
const input = new Set([10, 20, 20, 30, 30, 30])
console.log(input.size)

//4
const num = new Set([10, 30, 40, 50])
console.log(num.has(50))

//5
const arr = [5, 10, 15, 20];
const mySet = new Set(arr)
console.log(mySet, 'set')

//6
const fruitsSet = new Set(['Apple', 'Banana', 'Chiku', 'warermelon', 'grapes'])
for (const value of fruitsSet) {
    console.log(value)
}

//7
console.log(fruitsSet.size)

//8
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const findIntersection = (a, b) => {
    const setA = new Set(a)

    return b.filter(item => setA.has(item))
};
const result = findIntersection(arr1, arr2)
console.log(result)

//9
const arrSet1 = [1, 2, 3];
const arrSet2 = [3, 4, 5];

const filterUnion = (a, b) => {
    const combinedArray = [...a, ...b];
    const uniqueSet = new Set(combinedArray);

    return [...uniqueSet];
};

const resultAll = filterUnion(arrSet1, arrSet2);
console.log(resultAll);

//10
const arrA = [1, 2, 3, 4]
const arrB = [3, 4]
const allArr = (a, b) => {
    const uniqueSet1 = new Set(b)

    return a.filter()
}

const resultUnique = allArr(arrA,arrB)
console.log(resultUnique)


