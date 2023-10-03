//You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees(clockwise).
//
//You have to rotate the image in -place, which means you have to modify the input 2D matrix directly.DO NOT allocate another 2D matrix and do the rotation.

function rotateMatrix(matrix) {
    let n = matrix.length
    let result = [n][n];
    let element;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            element = matrix[i][j];
            result[j][n - i + 1] = element;            
        }
    }

    matrix = result;
    return matrix;
};

function printMatrix(matrix) {
    for (let i = 0; i <= matrix.length; i++) {
        for (let j = 0; i<= matrix.length; j++) {
            console.log(matrix[i][j] + " ");
        }
        console.log("\n");
    }
}