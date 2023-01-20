const maxArea = (height: number[]): number => {
    let [l, r, res] = [0, height.length - 1, 0];
    while (l < r) {
        let area = Math.min(height[l], height[r]) * (r - l);
        res = Math.max(res, area);
        if (height[l] < height[r]) {
            l++;
        }
        else {
            r--;
        }
    }
    return res;
};

export default maxArea;
