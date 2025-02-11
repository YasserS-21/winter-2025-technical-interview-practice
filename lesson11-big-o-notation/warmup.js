// Prompt 1: Find if an item is repeated in an array. Given an array of integers, find if an integer appears more than once in the array.
const hasDuplicate = (nums) => {
    let setOfNums = new Set([nums])
    return setOfNums != nums.length
};

// Prompt 2: Count occurrences of a letter from one string in another string. Given two strings, find the number of times a letter from the first string appears in the second string.
const countLetterOccurrences = (str1, str2) => {
    let str1Map = new Map()
    let occurancesInS2
    for (let char of str1){
        str1Map.set(char, true)
    }
    for (let char of str2) {
        if (str1Map.has(char)) {
            occurancesInS2++
        }
    }
};

// Prompt 3: Find the maximum difference between two elements in an array. Given an array of integers, find the maximum difference between any two elements in the array.
const maxDifference = (nums) => {
    let min = Infinity
    let max = -Infinity
    for (let num of nums){
        if (num > max) 
            max = num
        if (num < min)
            min = num
    }
};
