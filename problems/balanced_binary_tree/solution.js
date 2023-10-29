/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root) => {
    if (!root) return true;

    const height = (root) => {
        if (!root) return 0;
        return Math.max(height(root.left), height(root.right)) + 1;
    }

    const left = height(root.left);
    const right = height(root.right);
 
    return (Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced( root.right));
};