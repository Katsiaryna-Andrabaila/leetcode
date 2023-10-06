/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i += 1) {
        let second = target - nums[i];
        const newArr = i === 0
            ? nums.slice(1)
            : (nums.slice(0, i).concat(nums.slice(i + 1)));

        if (newArr.includes(second)) {
            return [i, newArr.indexOf(second) + 1];
        }
    }
};