package blind75

func lengthOfLongestSubstring(s string) int {
    m := make(map[byte]int)
    max, start := 0, 0
    for i, v := range []byte(s) {
        if j, ok := m[v]; ok && j >= start {
            start = j + 1
        }
        if i-start+1 > max {
            max = i - start + 1
        }
        m[v] = i
    }
    return max
}
