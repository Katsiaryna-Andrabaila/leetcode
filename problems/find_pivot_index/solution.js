/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const leftSum = nums.slice(0, i).reduce((el, acc) => el + acc, 0);
        const rightSum = nums.slice(i + 1).reduce((el, acc) => el + acc, 0);
        
        if (leftSum === rightSum) return i;
    }
    
    return -1;
};