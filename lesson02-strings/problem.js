/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
// 
let left = 0
let right = 0;
let maxLength = 0;
let set = new Set();
// if the set has the character, take length, update, clear set , move left pointer to right 
  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
      maxLength = Math.max(maxLength, set.size);
    } else {
      maxLength = Math.max(maxLength, set.size);
      set.clear()
      left = right;
      set.add(s[left]) 
      right++;
    }
  
  }
  return maxLength
}
module.exports = lengthOfLongestSubstring;
