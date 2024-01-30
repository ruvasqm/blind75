pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
    let m = matrix[0].len();
    let n = matrix.len();
    let mut result: Vec<i32> = vec![];
    let mut h_limit = m;
    let mut v_limit = n;
    let mut x = 0;
    let mut y = 0;
    let mut v: Vec<i32> = vec![1, 0];
    let mut counter = 0;
    while result.len() < m * n {
        result.push(matrix[y][x]);
        counter += 1;
        println!("{} {} {:?} {} {} {}", x, y, v, h_limit, v_limit, counter);
        if v[0] != 0 && counter == h_limit {
            v = vec![-v[1], v[0]];
            v_limit -= 1;
            counter = 0;
        } else if v[1] != 0 && counter == v_limit {
            v = vec![-v[1], v[0]];
            h_limit -= 1;
            counter = 0;
            println!("changed vy");
        }
        x = match v[0].is_negative() {
            true => x - 1,
            _ => x + v[0] as usize,
        };

        y = match v[1].is_negative() {
            true => y - 1,
            _ => y + v[1] as usize,
        };
        println!("{:?}", result)
    }
    result
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_1() {
        assert_eq!(
            super::spiral_order(vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]]),
            vec![1, 2, 3, 6, 9, 8, 7, 4, 5]
        );
    }
}
