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
 * @return {number[]}
 */

const inorderTraversal = (root) => {
    if (!root) return [];
    const arr = [];

    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        arr.push(node.val);
        traverse(node.right);
        return arr;
    }
    
    return traverse(root);
};