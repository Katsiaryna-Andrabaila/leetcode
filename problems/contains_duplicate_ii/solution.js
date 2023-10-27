/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    for (let i = 0; i < nums.length; i += 1) {
        const curr = nums[i];
        for (let j = 0; j < nums.length; j += 1) {
            if (curr === nums[j] && i !== j && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }

    return false;
};