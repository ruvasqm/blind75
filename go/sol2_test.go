package blind75

import "testing"

func TestLengthOfLongestSubstring(t *testing.T) {
    tcs := []struct {
        input string
        expect int
    }{
        {"abcabcbb", 3},
        {"bbbbb", 1},
        {"pwwkew", 3},
        {"", 0},
        {" ", 1},
        {"au", 2},
        {"dvdf", 3},
    }
    for _, tc := range tcs {
        if output := lengthOfLongestSubstring(tc.input); output != tc.expect {
            t.Errorf("input: %v, expect: %v, output: %v", tc.input, tc.expect, output)
        }
    }
}
