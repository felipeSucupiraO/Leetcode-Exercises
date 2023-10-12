function spiral(matrix) {
    var n = matrix.length; // lines
    var m = matrix[0].length; // columns
    
    var result = [];

    for (var i = 0; i <= Math.floor(n / 2) && i <= Math.floor(m / 2); i++) {
        for (let j = i; j <= m - 1 - i; j++) {
            result.push(matrix[i][j]);
        }
        for (let j = i + 1; j <= n - 1 - i; j++) {
            result.push(matrix[j][m - 1 - i]);
        }
        for (let j = m - 2 - i; j >= i + 1; j--) {
            result.push(matrix[n - 1 - i][j]); 
        }
        for (let j = n - 1 - i; j >= i + 1; j--) {
            result.push(matrix[j][i]);
        }
    }

    return result;
}

// this solution is fundamentally wrong, and that makes me very sad