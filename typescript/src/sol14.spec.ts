function maxSubArray(nums: number[]): number {
  const maxSubArraySum = (nums: number[], left: number, right: number): number => {
    if (left === right) return nums[left];
    const mid = Math.floor((left + right) / 2);
    const leftSum = maxSubArraySum(nums, left, mid);
    const rightSum = maxSubArraySum(nums, mid + 1, right);
    const crossSum = maxCrossSum(nums, left, mid, right);
    return Math.max(leftSum, rightSum, crossSum);
  }

  const maxCrossSum = (nums: number[], left: number, mid: number, right: number): number => {
    let leftSum = -Infinity;
    let currSum = 0;
    for (let i = mid; i >= left; i--) {
      currSum += nums[i];
      leftSum = Math.max(leftSum, currSum);
    }
    let rightSum = -Infinity;
    currSum = 0;
    for (let i = mid + 1; i <= right; i++) {
      currSum += nums[i];
      rightSum = Math.max(rightSum, currSum);
    }
    return leftSum + rightSum;
  }

  return maxSubArraySum(nums, 0, nums.length - 1);

};


describe('sol14', function() {
  it('sol14', function() {
    const nums = [-2,1,-3,4,-1,2,1,-5,4];
    const result = maxSubArray(nums);
    expect(result).toBe(6);
  });
});
