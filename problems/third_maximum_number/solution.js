/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
    const unique = Array.from(new Set(nums));
    if (unique.length <= 2) return Math.max(...unique);
    
    unique.sort((a, b) =>  b - a);
    return unique[2];
};