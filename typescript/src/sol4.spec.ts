import maxArea from './sol4';

describe('maxArea', () => {
    it('should return the maximum area of the container', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
        expect(maxArea([1, 1])).toEqual(1);
        expect(maxArea([4, 3, 2, 1, 4])).toEqual(16);
        expect(maxArea([1, 2, 1])).toEqual(2);
    });
});
