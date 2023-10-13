/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    for (let i = 0; i < n; i += 1) {
        nums1.pop();
    }

    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};