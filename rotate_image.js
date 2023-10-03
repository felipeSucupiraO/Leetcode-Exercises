//You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees(clockwise).
//
//You have to rotate the image in -place, which means you have to modify the input 2D matrix directly.DO NOT allocate another 2D matrix and do the rotation.

function rotateMatrix(matrix) {
    let n = matrix.length
    let element;

    var result = createMatrix(n, n);

    for (let i = 0; i < n; i++) {
        var clm = (n - i - 1);
        for (let j = 0; j < n; j++) {
            element = matrix[i][j];
            result[j][clm] = element;            
        }
    }

    matrix = result;
    return matrix;
};

function createMatrix(lns, clms) {
    var matrix = [];
    var sub = [];
    
    for (let j = 0; j < clms; j++) {
        sub.push(0);
    }

    for (let i = 0; i < lns; i++) {
        matrix[i] = sub;
    }

    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i <= matrix.length; i++) {
        for (let j = 0; i<= matrix.length; j++) {
            console.log(matrix[i][j] + " ");
        }
        console.log("\n");
    }
}
