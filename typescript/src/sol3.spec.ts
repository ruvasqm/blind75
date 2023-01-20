import longestPalindrome from './sol3';

describe('longestPalindrome', () => {
    it('should return the longest palindrome substring', () => {
        expect(longestPalindrome('babad')).toEqual('bab');
        expect(longestPalindrome('cbbd')).toEqual('bb');
        expect(longestPalindrome('a')).toEqual('a');
        expect(longestPalindrome('ac')).toEqual('a');
    });
});
