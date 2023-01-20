const twoSum = (nums: number[], target: number): number[] => {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
        return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
};

describe('twoSum', () => {
    it('should return the indices of the two numbers that add up to the target', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
    }
);

