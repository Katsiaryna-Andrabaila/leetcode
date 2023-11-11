/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
    nums.sort((a, b) => a - b);
    const arr = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1 && !nums.includes(i + 1)) {
            arr.push(i + 1);
        }
    }
    
    return arr;
};