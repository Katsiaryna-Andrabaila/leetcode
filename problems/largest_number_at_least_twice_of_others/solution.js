/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = (nums) => {
    const max = Math.max(...nums);
    const i = nums.indexOf(max);
    nums.splice(i, 1);
    const nextMax = Math.max(...nums);
    
    return max >= nextMax * 2 ? i : -1;
};