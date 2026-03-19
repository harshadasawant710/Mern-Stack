//1. reverse string
let myName = 'harshada'
let reverseName = myName.split('').reverse().join('')
console.log(reverseName)

//2 check if pallindrome
function isPalindrome(str) {
    const cleanStr = str.toLowerCase();
    
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
}

console.log(isPalindrome("radar"));      // true
console.log(isPalindrome("hello"));      // false
console.log(isPalindrome("121"));        // true 

//3 remove duplicate from string
let duplicate = 'apple';
const uniqueSet = new Set(duplicate.split(''));
const uniqueArray = [...uniqueSet];
const result = uniqueArray.join('');

console.log(result); 

//4 find the first non-repeating character
let repeat = 'session';

function findFirstNonRepeating(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(findFirstNonRepeating(repeat)); 

//5 count the occurance of each character
let charCount = {};

for (let char of repeat) {
    charCount[char] = (charCount[char] || 0) + 1;
}

console.log(charCount);

//6 reverse the words in sentence
