/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
    const odd = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            const spliced = nums.splice(i, 1);
            odd.push(spliced);
            i--;
        }
    }
    
    return [...nums, ...odd];
};