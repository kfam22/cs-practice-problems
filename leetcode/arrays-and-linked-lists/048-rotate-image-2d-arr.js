// leetcode #48 Rotate Image
// https://leetcode.com/problems/rotate-image/

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {
    for(let r = 0; r < matrix.length; r++) {
        for(let c = r; c < matrix[r].length; c++ ){
            [matrix[c][r], matrix[r][c]] = [matrix[r][c], matrix[c][r]];
        }
    }
    
    for(let r = 0; r < matrix.length; r++){
        matrix[r].reverse();
    }
    
};


//    0 1 2
// 0 [1,4,7],
// 1 [2,5,8],
// 2 [3,6,9]

// (0,0), (0,1)(1,0), (0,2)(2,0), ...


// test case
// matrix = [[1,2,3],[4,5,6],[7,8,9]];
// expect [[7,4,1],[8,5,2],[9,6,3]];