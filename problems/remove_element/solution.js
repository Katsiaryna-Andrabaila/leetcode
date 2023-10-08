/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  const arr = nums.filter((el) => el !== val);
  nums.length = 0;
  nums.push(...arr);
  
  return nums.length;
};