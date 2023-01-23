const combinationSum = (candidates: number[], target: number): number[][] => {
    let result: number[][] = [];
    const dfs = (i: number, curr: number[], sum: number) => {
        if (sum === target) {
            result.push([...curr]);
            return;
        }
        if (i >= candidates.length || sum > target) {
            return;
        }
        curr.push(candidates[i]);
        dfs(i, curr, sum + candidates[i]);
        curr.pop();
        dfs(i + 1, curr, sum);
    }
    dfs(0, [], 0);
    return result;
}

describe('combinationSum', () => {
    it('should return all unique combinations of candidates that sum to target', () => {
        expect(combinationSum([2,3,6,7], 7)).toEqual([[2,2,3],[7]])
        expect(combinationSum([2,3,5], 8)).toEqual([[2,2,2,2],[2,3,3],[3,5]])
    });
});

