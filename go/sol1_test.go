package blind75

import "testing"

func TestTwoSum(t *testing.T) {
  got := TwoSum([]int{2, 7, 11, 15}, 9)
  want := []int{0, 1}
  if got[0] != want[0] || got[1] != want[1] {
    t.Errorf("got %v want %v", got, want)
  }
}
