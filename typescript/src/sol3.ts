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

export default longestPalindrome;
