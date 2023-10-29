/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
    let max = 0;
    let n = 0;
    
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 1) {
            n += 1;
        }
        if (nums[i] !== 1 || i === nums.length - 1) {
            max = n > max ? n : max;
            n = 0;
        }
    }
    
    return max;
};