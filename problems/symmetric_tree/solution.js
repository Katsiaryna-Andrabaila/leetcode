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
const isSymmetric = (root) => {
    let result = true;

    const checkNodes = (node1, node2) => {
        if (!node1 && node2 || node1 && !node2) result = false;
        if (node1 && node2) {
            if (node1.val === node2.val) {
                checkNodes(node1.left, node2.right);
                checkNodes(node1.right, node2.left);
            } else {
                result = false;
            }
        }
        return result;
    };

    return checkNodes(root.left, root.right);
}
