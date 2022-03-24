// Description
// Create a square 2D array of size size x size. Fill the array with 0.
// Then draw a line of 1s down the main diagonal.
// This is called an identity matrix.

function solution(size) {
    let row = Array(size).fill(0)
    let matrix = [];
  
    // array.splice(indexToChange, numberOfElementsToRemove, Replacement)
    
    for(let i = 0; i < size; i++){
        let currentRow = [...row]
        currentRow.splice(i, 1, 1);
        matrix.push(currentRow)
    }
    return matrix;
}


// test cases

// Test 1
// Input:
// size: 4

// Expected Output:
// [[1,0,0,0], 
//  [0,1,0,0], 
//  [0,0,1,0], 
//  [0,0,0,1]]

// Test 2
// The test case is too large and is shown truncated
// Input:
// size: 13

// Expected Output:
// [[1,0,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,1,0,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,1,0,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,1,0,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,1,0,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,1,0,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,1,0,0,0,0,0,0], 
//  [0,0,0,0,0,0,0,1,0]]

