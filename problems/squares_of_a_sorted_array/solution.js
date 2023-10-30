/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
    const arr = nums.map((el) => el ** 2);
    
    return arr.sort((a, b) => a - b);
};