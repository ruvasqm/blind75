const rotate = (matrix: number[][]) => {
    const n = matrix.length;
    for (let i = 0; i < n / 2; i++) {
        for (let j = i; j < n - i - 1; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = temp;
        }
    }
}

describe('rotate', () => {
    it('should rotate the matrix 90 degrees clockwise', () => {
        const matrix = [[1,2,3],[4,5,6],[7,8,9]]
        rotate(matrix)
        expect(matrix).toEqual([[7,4,1],[8,5,2],[9,6,3]])
    });
    it('should rotate the matrix 90 degrees clockwise', () => {
        const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
        rotate(matrix)
        expect(matrix).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]])
    });
});