export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?:number, next?:ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}
// TODO: reduce memory usage?
const removeNthFromEnd = (head: ListNode, n: number): ListNode | null=> {
    let dummy = new ListNode(0, head);
    let length = 1;
    while(dummy.next) {
        dummy = dummy.next;
        length++;
    }
    dummy = new ListNode(0, head);
    let prev = dummy;
    for(let i = 1; i < length - n; i++) {
        prev = prev.next!;
    }
    prev.next = null || prev.next!.next;
    return dummy.next;
};

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

