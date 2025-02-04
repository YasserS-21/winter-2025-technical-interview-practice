/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

function stringMatching(text, pattern) {
  // TODO: Implement the string matching algorithm
  // Return an array of indices where the pattern is found in the text
  // If the pattern is not found, return an empty array
// SOLUTION 1: nested loop O(n^2)
  let result = []
  for (let i = 0; i < text.length; i++) {
    console.log(text, pattern, text[i], i)
    if (text[i] === pattern[0]) {
      let flag = true
      for (let j = 1; j < pattern.length; j++) {
        if (text[i + j] !== pattern[j]) {
          flag = false
        }
      }
      if (flag) {
        result.push(i)
      }
    }
  }
  return result

// SOLUTION 2:REGEX
// if (!text.length || !pattern.length) return []

// const regex = new RegExp(`${pattern}`, `g`);
// let result = []
// for (const match of text.matchAll(regex)){
//   if (match.index) result.push(match.index)
// }
// return result

// }

console.log(stringMatching("ababcababcabc", "abc"));
module.exports = stringMatching;
