pub fn can_jump(nums: Vec<i32>) -> bool {
    let mut reached: i32 = 0;
    for (i, num) in nums.iter().enumerate() {
        if i as i32 > reached {
            return false;
        }
        if i as i32 + num > reached {
            reached = i as i32 + num;
            if reached >= (nums.len() - 1) as i32 {
                return true;
            }
        }
    }
    reached == (nums.len() - 1) as i32
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_1() {
        assert_eq!(super::can_jump(vec![2, 3, 1, 1, 4]), true);
    }
    #[test]
    fn test_2() {
        assert_eq!(super::can_jump(vec![3, 2, 1, 0, 4]), false);
    }
    #[test]
    fn test_3() {
        assert_eq!(super::can_jump(vec![0]), true);
    }
}
