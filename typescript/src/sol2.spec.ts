const lengthOfLongestSubstring = (s: string): number => {
    let max = 0;
    let start = 0;
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = Math.max(start, map.get(s[i])! + 1);
        }
        map.set(s[i], i);
        max = Math.max(max, i - start + 1);
    }
    return max;
}

describe('lengthOfLongestSubstring', () => {
    it('should return the length of the longest substring without repeating characters', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
        expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
        expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    });
}
);
