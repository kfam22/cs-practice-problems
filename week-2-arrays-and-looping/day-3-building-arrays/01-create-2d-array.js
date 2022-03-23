// Description
// Create a 2D array of size row_count x col_count. Fill the array with 0.

function solution(row_count, col_count) {
    let col = []
    let twoD = []
    
    while(col.length < col_count){
        col.push(0)
    }
    
    while(twoD.length < row_count){
        twoD.push(col)
    }
    
    return twoD;
}


// test cases
// Test 1
// Input:
// row_count: 2
// col_count: 3

// Expected Output:=
// [[0,0,0], 
//  [0,0,0]]

// Test 2
// The test case is too large and is shown truncated
// Input:

// row_count: 28
// col_count: 17

// Expected Output:

// [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

// Test 3
// The test case is too large and is shown truncated
// Input:

// row_count: 34
// col_count: 23

// Expected Output:

// [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,0,0]]