//1. reverse string
let myName = 'reverseStr'
let revStr = myName.split('').reverse().join('')
console.log(revStr)

//2 check if pallindrome
function isPalindromic(str) {
    let normalStr = str.toLowerCase()
    let reverseStr = normalStr.split('').reverse().join('')
    return normalStr === reverseStr
}
console.log(isPalindromic('radar'))
console.log(isPalindromic('123'))

//3 remove duplicate from string1
let duplicate = 'apple'
let removeDuplicate = new Set(duplicate.split(''))
let uniqueStr = [...removeDuplicate]
uniqueStr = uniqueStr.join('')
console.log(uniqueStr)

//4 find the first non-repeating character
let repeat = 'session'
let firstUnique = [...repeat].find((char) => repeat.indexOf(char) === repeat.lastIndexOf(char))
console.log(firstUnique || 0)

//5 count the occurance of each character
let charCount = {}
for (let char of repeat) {
    charCount[char] = (charCount[char] || 0) + 1
}
console.log(charCount)

//6 reverse the words in sentence
let meassage = 'Good Morning all, lets learn MERN today.'
let strMessage = meassage.split(' ')
let reverseMsg = strMessage.reverse().join(' ')
console.log(reverseMsg)

//7 Check if Two Strings are Anagrams
function isAnagrams(str1, str2) {
    const format = (str) => str.split('').sort().join('')
    return format(str1) === format(str2)
}
console.log(isAnagrams('listen', 'silent'))

//11 Find the Most Frequent Character
function mostFrequentChar(inputString){
    if(!inputString) return null

    let charCount = {}
    let maxCount = 0
    let mostFrequentChar = ''

    for(let char of inputString){
        charCount[char] = (charCount[char] || 0) + 1
        
        if(charCount[char] > maxCount){
        maxCount = charCount[char]
        mostFrequentChar = char
    }
    }
    
    return mostFrequentChar
}
console.log('Most Frequent:', mostFrequentChar('harshada')); // Output: "a"

//12 Find All Substrings of a Given String
function getAllSubstrings(inputString) {
    let result = []
    for (let i = 0; i < inputString.length; i++) {
        for (let j = i + 1; j <= inputString.length; j++) {
            let slice = inputString.substring(i, j)
            result.push(slice)
        }
    }
    return result
}
console.log(getAllSubstrings('abcd'))

//13 Check if a String is a Rotation of Another String
function isRotation(string1, string2) {
    if (string1.length !== string2.length || string1.length === 0) {
        return false
    }
    let combinedString = string1 + string1
    return combinedString.includes(string2)
}
console.log(isRotation('watermelon', 'melonwater'))

//14 Remove All White Spaces from a String

function removeWhiteSpace(inputString) {
    let result = inputString.split(' ').join('')
    return result
}
console.log(removeWhiteSpace(' hello   world!  '))

//16 Convert a String to Title Case
function toTitleCase(str) {
    return str.toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}
console.log(toTitleCase('hello everyone, this is harshada!'))

//17 Find the Longest Common Prefix
function longestPrefix(inputStrings) {
    if (!inputStrings.length) return ''

    let first = inputStrings[0]
    let last = inputStrings[inputStrings.length - 1]
    let i = 0

    while (i < first.length && first[i] === last[i]) {
        i++
    }
    return first.substring(0, i)
}
console.log(longestPrefix(['flower','flow','fly','flu']))

//18 Convert a String to a Character Array
let inputString = 'hello world!'
inputString = inputString.split(' ').join('')
// let charArray = Array.from(inputString)
// let charArray = [...inputString]
let charArray = inputString.split('')
console.log(charArray)

//19 Replace Spaces with %20 (URL Encoding)
let inString = 'hello world!'
let encoded = encodeURIComponent(inString)
console.log(encoded)

//20 Convert a Sentence into an Acronym
const convertAcronym = (str) => str.
    trim().
    split(/\s+/)
    .map((w) => w[0].toUpperCase())
    .join('')
console.log(convertAcronym('as soon as possible!'))

//21 Check if a String Contains Only Digits
function isOnlyDigitsEvery(inputString) {
    if (!inputString) return false;
    return [...inputString].every(char => char > 0 && char <= 9)
}
console.log(isOnlyDigitsEvery('123'))
console.log(isOnlyDigitsEvery('12378'))
console.log('here 21')

//22 Find the Number of Words in a String
function countNumofWord(inputString) {
    const countWord = inputString
    if (countWord === '') return 0;
    const potentialWords = countWord.split(' ')
    const realWords = potentialWords.filter((word) => word !== '')
    return realWords.length
}
console.log(countNumofWord('hello, Good    Morning!, Everyone.'))

//23 Remove a Given Character from a String
function removeGivenChar(inputString, charToRemove) {
    // return inputString.replaceAll(charToRemove, '')
    return inputString.split(charToRemove).join('')
}
console.log(removeGivenChar('harshada', 'a'))

//24 Find the Shortest Word in a String
function findShortest(inputString){
let initialWords = inputString.trim().split(' ')

let word = initialWords.filter((word) => word.length > 0)
return word.reduce((shortest,current) => current.length < shortest.length ? current:shortest, word[0])
}
console.log(findShortest('the fox in the forest'))

//25 Find the Longest Palindromic Substring
function countPalindromicSubstrings(inputString) {
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        // Count odd-length palindromes (center is i)
        count += expandAndCount(inputString, i, i);
        
        // Count even-length palindromes (center is i and i+1)
        count += expandAndCount(inputString, i, i + 1);
    }

    return count;
}

function expandAndCount(s, left, right) {
    let subCount = 0;
    
    // While pointers are in bounds and characters match
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        subCount++; // We found a palindrome!
        left--;     // Move left pointer out
        right++;    // Move right pointer out
    }
    
    return subCount;
}

// Test case
console.log(countPalindromicSubstrings("abc"));  // 3 ("a", "b", "c")

//8 Find the Longest Substring Without Repeating Characters 
function longestSubstringSimple(substring) {
    // 1. Edge Case: If the string is empty, we return null
    if(!substring) return null;

    // 2. The "Window": An array that acts as our current unique sequence
    let currentWindow = [];
    
    // 3. The "Record": Keeps track of the highest length we've found so far
    let maxLength = 0;

    // 4. Loop through every character in the string
    for (let char of substring) {
        
        // 5. Check: Is this character ALREADY in our current window?
        const index = currentWindow.indexOf(char);

        // 6. If it IS found (index is not -1):
        if (index !== -1) {
            // We must remove the old version of this character 
            // AND everything that came before it to stay "unique."
            // .splice(0, index + 1) cuts from the start of the array up to that duplicate.
            currentWindow.splice(0, index + 1);
        }

        // 7. Add the new character to the end of our window
        currentWindow.push(char);

        // 8. Update our record: Is our current window bigger than the previous record?
        // Math.max simply picks the larger of the two numbers.
        maxLength = Math.max(maxLength, currentWindow.length);
    }

    // 9. Return the highest number found
    return maxLength;
}

// Tests
console.log(longestSubstringSimple("abcdada")); // 4 ("abcd")
console.log(longestSubstringSimple("pwwkew"));  // 3 ("wke" or "kew")