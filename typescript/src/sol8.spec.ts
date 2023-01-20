/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from './sol6.spec';
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}

describe('merge two sorted lists into one sorted list', () => {
    it('should merge two sorted lists into one sorted list', () => {
        const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        const mergedList = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));
        expect(mergeTwoLists(list1, list2)).toEqual(mergedList);
    });
});
