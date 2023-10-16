/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
    if (nums.length === 0) return null;
    if (nums.length === 1) return new TreeNode(nums[0]);

    const center = Math.floor( nums.length / 2);
    const root = new TreeNode(nums[center]);

    const left = nums.slice(0, center);
    const right = nums.slice(center + 1);

    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);

    return root;
};