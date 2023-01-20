import { ListNode } from './sol6.spec';
import { mergeTwoLists } from './sol8.spec';

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    let mergedList = lists[0];
    let amountOfLists = lists.length;
    let interval = 1;
    while (interval < amountOfLists) {
        for (let i = 0; i < amountOfLists - interval; i += interval * 2) {
            mergedList = mergeTwoLists(mergedList, lists[i + interval]);
        }
        interval *= 2;
    }
    return mergedList;
};

describe('merge k sorted lists into one sorted list', () => {
    it('should merge k sorted lists into one sorted list', () => {
        const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
        const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        const list3 = new ListNode(2, new ListNode(6));
        const mergedList = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))))));
        expect(mergeKLists([list1, list2, list3])).toEqual(mergedList);
    });
});
