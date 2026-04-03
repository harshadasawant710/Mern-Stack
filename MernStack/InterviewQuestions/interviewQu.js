//1. reverse string
let myName = 'harshada'
let nameReverse = myName.split('').reverse().join('')
console.log(nameReverse)

//2 check if pallindrome
function isPallindrome(str) {
    let normalStr = str.toLowerCase()
    let reverseStr = normalStr.split('').reverse().join('')
    return normalStr === reverseStr
}
console.log(isPallindrome('radar'))
console.log(isPallindrome('121211'))

//3 remove duplicate from string1
let duplicate = 'apple'
let removeDuplicate = new Set(duplicate.split(''))
let setUnique = [...removeDuplicate]
setUnique = setUnique.join('')
console.log(setUnique)

//4 find the first non-repeating character
let repeat = 'session';
const firstUnique = [...repeat].find(char => repeat.indexOf(char) === repeat.lastIndexOf(char))
console.log(firstUnique || null)

//5 count the occurance of each character
let charCount = {}
for(let char of repeat){
    charCount[char] = (charCount[char] || 0) +1
}
console.log(charCount)

//6 reverse the words in sentence
let meassage = 'Good Morning all, lets learn MERN today.'
let setMessage = meassage.split(' ')
let reverseMsg = setMessage.reverse().join(' ')
console.log(reverseMsg)

//7 Check if Two Strings are Anagrams
function isAnagrams(str1,str2){
    const format = (str) => str.split('').sort().join('')
    return format(str1) === format(str2)
}
console.log(isAnagrams('listen','slient'))

//8 Find the Longest Substring Without Repeating Characters //need to review again
function longestSubstringSimple(s) {
    let currentWindow = [];
    let maxLength = 0;

    for (let char of s) {
        const index = currentWindow.indexOf(char);
        if (index !== -1) {
            currentWindow.splice(0, index + 1);
        }
        currentWindow.push(char);
        maxLength = Math.max(maxLength, currentWindow.length);
    }

    return maxLength;
}

console.log(longestSubstringSimple("abcabcbb")); // 3
console.log(longestSubstringSimple("pwwkew"));   // 3
console.log('longestSubstringSimple',longestSubstringSimple("pwershhhhhh"));   // 3


//9 Convert a String to an Integer (atoi Implementation)
function myAtoi(inputString) {
    let cleanStr = inputString.trim();
    if (!cleanStr) return 0;

    let index = 0;
    let sign = 1;
    let result = 0;

    if (cleanStr[index] === '-' || cleanStr[index] === '+') {
        sign = cleanStr[index] === '-' ? -1 : 1;
        index++;
    }
    const LIMIT_MAX = 2**31 - 1;
    const LIMIT_MIN = -(2**31);

    while (index < cleanStr.length && cleanStr[index] >= '0' && cleanStr[index] <= '9') {
        let currentDigit = cleanStr[index] - '0';
        
        result = (result * 10) + currentDigit;
        index++;

        if (result * sign >= LIMIT_MAX) return LIMIT_MAX;
        if (result * sign <= LIMIT_MIN) return LIMIT_MIN;
    }

    return result * sign;
}
console.log(myAtoi('9998bhbnnj-'))

//10 Compress a String (Run-Length Encoding)
function compressString(inputString) {
    if (!inputString) return "";

    let compressed = "";
    let count = 1;

    for (let index = 0; index < inputString.length; index++) {
        if (inputString[index] === inputString[index + 1]) {
            count++;
        } else {
            compressed += inputString[index] + count;
            count = 1; 
        }
    }
    return compressed.length < inputString.length ? compressed : inputString;
}

console.log(compressString("aabcccccaaa")); // "a2b1c5a3"
console.log(compressString("abc"));         // "abc" (because "a1b1c1" is longer)

//11 Find the Most Frequent Character
function findMostFrequent(inputString) {
    if (!inputString) return null;

    let charMap = {};
    let maxCount = 0;
    let mostFrequentChar = '';

    for (let char of inputString) {
        charMap[char] = (charMap[char] || 0) + 1;

        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            mostFrequentChar = char;
        }
    }

    return mostFrequentChar;
}

console.log(findMostFrequent("javascript")); // "a" (appears twice)
console.log(findMostFrequent("success"));    // "s" (appears three times)

//12 Find All Substrings of a Given String
function getAllSubstrings(inputString) {
    let result = [];
    for (let i = 0; i < inputString.length; i++) {
        for (let j = i + 1; j <= inputString.length; j++) {
            
            let slice = inputString.substring(i, j);
            result.push(slice);
        }
    }

    return result;
}
console.log(getAllSubstrings("abc")); 

//13 Check if a String is a Rotation of Another String
function isRotation(string1, string2) {
    if (string1.length !== string2.length || string1.length === 0) {
        return false;
    }
    const combinedString = string1 + string1;
    return combinedString.includes(string2);
}

console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("hello", "olelh"));             // false

//14 Remove All White Spaces from a String
function removeSpacesSimple(inputString) {
    return inputString.split(' ').join('');
}
console.log(removeSpacesSimple('hello world'))

//15 Check if a String is a Valid Shuffle of Two Strings
function isValidShuffle(str1, str2, shuffled) {
    // 1. Length must match exactly
    if (str1.length + str2.length !== shuffled.length) {
        return false;
    }

    let p1 = 0; // Pointer for str1
    let p2 = 0; // Pointer for str2

    // 2. Iterate through the shuffled string
    for (let char of shuffled) {
        if (p1 < str1.length && char === str1[p1]) {
            p1++;
        } else if (p2 < str2.length && char === str2[p2]) {
            p2++;
        } else {
            // Character doesn't match the next available char in either string
            return false;
        }
    }

    return true;
}

// Test cases
console.log(isValidShuffle("abc", "def", "abdcef")); // true
console.log(isValidShuffle("abc", "def", "afedbc")); // false (order changed)

//16 Convert a String to Title Case
function toTitleCase(str) {
    return str.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(toTitleCase('heLLo wOrLd'))

//17 Find the Longest Common Prefix
function lcpWithSorting(inputStrings) {
    if (!inputStrings.length) return "";
    
    inputStrings.sort(); // Sorts alphabetically
    
    let first = inputStrings[0];
    let last = inputStrings[inputStrings.length - 1];
    let i = 0;
    
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    
    return first.substring(0, i);
}
console.log(lcpWithSorting(["flower", "flow", "flight"]))

//18 Convert a String to a Character Array
const inputString = "hello";
const charArray = [...inputString];
//const charArray = inputString.split('');
//const charArray = Array.from(inputString);

console.log(charArray); 

//19 Replace Spaces with %20 (URL Encoding)
const inString = "hello world!";
const encoded = encodeURIComponent(inString); 
console.log(encoded)

function urlifyRegex(inputString) {
    // \s matches whitespace, g means global (all of them)
    return inputString.replace(/ /g, "%20");
}
console.log(urlifyRegex('hello world'))

//20 Convert a Sentence into an Acronym
const makeAcronym = (str) => 
    str.trim().split(' ').map(w => w[0].toUpperCase()).join('');
console.log(makeAcronym('as soon as possible!'))

//21 Check if a String Contains Only Digits
function isOnlyDigitsEvery(inputString) {
    if (!inputString) return false;
    return [...inputString].every(char => char >= '0' && char <= '9');
}
console.log(isOnlyDigitsEvery('12345'))
console.log(isOnlyDigitsEvery('12345vdvd'))

function isOnlyDigitsManual(inputString) {
    if (!inputString) return false;

    for (let char of inputString) {
        if (char < '0' || char > '9') {
            return false;
        }
    }
    return true;
}
console.log(isOnlyDigitsManual('12345vdvd'))

//22 Find the Number of Words in a String
function countWordsManual(inputString) {
    const cleanString = inputString.trim();
    if (cleanString === "") return 0;

    // 1. Split by a single space
    const potentialWords = cleanString.split(' ');

    // 2. Filter out empty strings (caused by multiple spaces)
    const realWords = potentialWords.filter(word => word !== "");

    return realWords.length;
}

console.log(countWordsManual("Hello   World")); // 2

function groupAnagrams(words) {
    let map = {};

    for (let word of words) {
        let sorted = [...word].sort().join('');
        if (!map[sorted]) map[sorted] = [];
        map[sorted].push(word);
    }
    return Object.values(map);
}
console.log(groupAnagrams('hello world!'))

//23 Remove a Given Character from a String
function removeChar(inputString, charToRemove) {
    return inputString.replaceAll(charToRemove, "");
    //1 return inputString.split(charToRemove).join("");
    //2 return [...inputString]
    //     .filter(char => char !== charToRemove)
    //     .join("");
}

console.log(removeChar("banana", "a")); // "bnn"    

//24 Find the Shortest Word in a String
function findShortestReduce(inputString) {
    const words = inputString.trim().split(/\s+/);
    
    return words.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    }, words[0]);
}
console.log(findShortestReduce("The quick brown fox"))

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
console.log(countPalindromicSubstrings("aaa"));  // 6 ("a", "a", "a", "aa", "aa", "aaa")
