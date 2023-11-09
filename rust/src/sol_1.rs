fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    // I want a map that has o(1) lookup time to store the
    // substraction complement
    let mut map = std::collections::HashMap::new();
    for (i, num) in nums.iter().enumerate() {
        let complement = target - num;
        if map.contains_key(&complement) {
            return vec![*map.get(&complement).unwrap() as i32, i as i32];
        }
        map.insert(num, i);
    }
    // This should never happen based on contraints
    return vec![];
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_1() {
        assert_eq!(super::two_sum(vec![2, 7, 11, 15], 9), vec![0, 1]);
    }

    #[test]
    fn test_2() {
        assert_eq!(super::two_sum(vec![3, 2, 4], 6), vec![1, 2]);
    }

}
