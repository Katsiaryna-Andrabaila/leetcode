/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    const arr = nums.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] !== arr[i + 1]) {
            return arr[i];
        }
    }
};