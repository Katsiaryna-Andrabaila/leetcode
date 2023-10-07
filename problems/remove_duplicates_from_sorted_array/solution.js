/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  const set = new Set(nums);
  const arr = Array.from(set);
  nums.splice(0, set.size, ...arr);
  return set.size;
}