/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const obj = {};

    for (let i = 0; i < nums.length; i += 1) {
        obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1;
    }

    const element = Object.entries(obj).find((el) => el[1] > nums.length / 2);

    return element[0];
};