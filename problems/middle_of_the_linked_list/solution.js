/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
    const array = [];

    while(head) {
        array.push(head);
        head = head.next;
    }

    const middle = (array.length / 2) % 2 === 0 ? array.length / 2 : Math.floor(array.length / 2);
  
    return array[middle];
};