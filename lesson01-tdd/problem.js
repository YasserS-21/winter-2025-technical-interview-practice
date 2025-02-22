/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  if (typeof str !== "string"){
    throw new Error("Invalid input")
  }
  str = str.split(" ").map((word => word.trim().toLowerCase())).join("")
  if (str.length <= 1) 
    return true
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] === " " || str[left].charCodeAt(0) < 97 || str[left].charCodeAt(0) > 122) {
      left++
      continue
    }
    if (str[right] === " "|| str[right].charCodeAt(0) < 97 || str[right].charCodeAt(0) > 122) {
      right--
      continue
    }
    if (str[left] !== str[right])
      return false
    left++
    right--
  }
  return true
  // your code here
  
}

module.exports = isPalindrome;
