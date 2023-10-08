/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    const array = [];

    while(list1) {
        array.push(list1.val);
        list1 = list1.next;
    }

    while(list2) {
        array.push(list2.val);
        list2 = list2.next;
    }

    array.sort((a, b) => a - b);
    return array.reduceRight((acc, n) => ({ val: n, next: acc }), null);
};