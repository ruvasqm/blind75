const maxArea = (height: number[]): number => {
    let [l, r, res] = [0, height.length - 1, 0];
    while (l < r) {
        let area = Math.min(height[l], height[r]) * (r - l);
        res = Math.max(res, area);
        if (height[l] < height[r]) {
            l++;
        }
        else {
            r--;
        }
    }
    return res;
};

describe('maxArea', () => {
    it('should return the maximum area of the container', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
        expect(maxArea([1, 1])).toEqual(1);
        expect(maxArea([4, 3, 2, 1, 4])).toEqual(16);
        expect(maxArea([1, 2, 1])).toEqual(2);
    });
});
