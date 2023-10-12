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
const deleteDuplicates = (head) => {
    let pointer = head;

    while (pointer) {
        if (pointer.next && pointer.val === pointer.next.val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }
    return head;
    /* const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    const set = new Set(arr);
    const array = Array.from(set);

    return array.reduceRight((acc, n) => ({ val: n, next: acc }), null); */
};