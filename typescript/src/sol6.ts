class ListNode {
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

export {ListNode, removeNthFromEnd};

