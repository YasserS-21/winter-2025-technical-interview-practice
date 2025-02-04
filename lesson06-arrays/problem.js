// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */
// if (nums > largest) {
//   secondlargest = largest
//      largest = nums
function checkLargestElement(nums) {
    let secondLargest = nums[0];
    let largest = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest 
            largest = nums[i]
        }
    }

    if (largest >= secondLargest * 2) {
        return largest
    } else {
        return -1;
    }
}

module.exports = checkLargestElement;
