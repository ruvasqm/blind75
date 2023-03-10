const longestPalindrome = (s: string): string => {
    let [resL, resR] = [0, 0];
    for (let i = 0; i < s.length; i++) {
        let [l, r] = [i, i];
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1> resR - resL) {
                [resL, resR] = [l, r + 1];
            }
            l--;
            r++;
        }
        [l, r] = [i, i + 1];
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1> resR - resL) {
                [resL, resR] = [l, r + 1];
            }
            l--;
            r++;
        }
    }
    return s.slice(resL, resR);
};

describe('longestPalindrome', () => {
    it('should return the longest palindrome substring', () => {
        expect(longestPalindrome('babad')).toEqual('bab');
        expect(longestPalindrome('cbbd')).toEqual('bb');
        expect(longestPalindrome('a')).toEqual('a');
        expect(longestPalindrome('ac')).toEqual('a');
    });
});
