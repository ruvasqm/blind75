const threeSum = (nums: number[]): number[][] => {
    let sorted = nums.sort((a, b) => a - b);
    let res: number[][] = [];
    let prev = 0;
    for (let i = 0; i < sorted.length - 2; i++) {
        if (i !== 0 && sorted[i] === prev) {
            continue;
        }
        let l = i + 1;
        let r = sorted.length - 1;
        while (l < r) {
            let sum = sorted[i] + sorted[l] + sorted[r];
            let offset = 0;
            if (sum > 0) {
                while (l <= (r+ offset) && sorted[r + offset] === sorted[r]) {
                    offset--;
                }
                r += offset;
            } else if (sum < 0) {
                while ((l + offset) <= r && sorted[l + offset] === sorted[l]) {
                    offset++;
                }
                l += offset;
            } else {
                res.push([sorted[i], sorted[l], sorted[r]]);
                while((l + offset) <= r && sorted[l + offset] === sorted[l]) {
                    offset++;
                }
                l += offset;
            }
        }
        prev = sorted[i];
    }
    return res;
};


export default threeSum;
