/**
 * @param {number[]} nums
 * @return {number}
 */
const sumCounts = (nums) => {
    let sum = 0;
    
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = 1; j <= nums.length; j += 1) {
            if (i + j > nums.length) continue;
            sum += Array.from(new Set(nums.slice(i, i + j))).length ** 2;
        }
    }
    
    return sum;
};