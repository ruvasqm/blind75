// nums is possibly rotated k times to the left
const search = (nums: number[] , target: number): number => {
    let [l, r] = [0, nums.length - 1];
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (nums[m] === target) return m;
        // left sorted portion
        if (nums[l] <= nums[m]) {
            if(target > nums[m] || target < nums[l]) {
                l = m + 1;
            }
            else {
                r = m - 1;
            }
        }
        // right sorted portion
        else {
            if(target < nums[m] || target > nums[r]) {
                r = m - 1;
            }
            else {
                l = m + 1;
            }
        }
    }
    return -1;
}

describe('search', () => {
    it('should return the index of the target in the unrotated array or -1 if not found', () => {
        expect(search([4,5,6,7,0,1,2], 0)).toBe(4)
        expect(search([0,1,2,4,5,6,7], 4)).toBe(3)
        expect(search([0,1,2,4,5,6,7], 3)).toBe(-1)
        expect(search([0,1,2,4,5,6,7], 3)).toBe(-1)
        expect(search([0,1,2,4,5,6,7], 0)).toBe(0)
        expect(search([0,1,2,4,5,6,7], 7)).toBe(6)
        expect(search([4,5,6,7,0,1,2], 3)).toBe(-1)
    });
});

