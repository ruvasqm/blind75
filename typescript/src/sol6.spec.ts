import { ListNode, removeNthFromEnd } from './sol6';

describe('removeNthFromEnd', () => {
    it('should remove the nth node counting from the end of the list', () => {
        // expect the traversal to be the same
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        const expected = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))));
        const actual = removeNthFromEnd(head, 2);
        expect(actual).toEqual(expected);
        expect(actual!.next!.next!.next!.next).toBeNull();
        expect(actual!.next!.next!.next!.val).toEqual(5);
        expect(actual!.next!.next!.val).toEqual(3);
        expect(actual!.next!.val).toEqual(2);
        expect(actual!.val).toEqual(1);
    });
    it('should remove the first and only node', () => {
        const head = new ListNode(1);
        const expected = null;
        const actual = removeNthFromEnd(head, 1);
        expect(actual).toEqual(expected);
    });
});

