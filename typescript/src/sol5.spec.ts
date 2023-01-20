import threeSum from './sol5';

describe('threeSum', () => {
    it('should return the unique triplets that sum to zero', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
        expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
        expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
        expect(threeSum([0, 0, 0, 1])).toEqual([[0,0,0]]);
        expect(threeSum([0, 0, 0, 1, 1])).toEqual([[0,0,0]]);
    });
});
