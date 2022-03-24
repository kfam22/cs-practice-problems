// You're given an array of integers a. Let's call (a[i - 1], a[i], a[i + 1]) a good tuple, if 
// exactly 2 out of the 3 numbers in it are equal. For example, (2, 1, 2) is a good tuple, 
// but (1, 1, 1) and (1, 2, 3) are not.
// Your task is to return the number of good tuples in a.
// Note: The tuples may be overlapping.

// solution 1
function solution(a) {
    let tupleCount = 0
    
    for (let i = 0; i <a.length -2; i++){
        if (isGood(a[i], a[i+1], a[i+2])=== true) tupleCount++;
    }
    return tupleCount;
}

function isGood(x,y,z) {
    let matchCount = 0; 
    if ((x === y && x != z) || (x === z && x != y) || (y === z && y != x)) {
        matchCount++;
    }
    return matchCount === 1;
}

// Test Cases

// Test 1
// Input:
// a: [1, 1, 1, 2, 1, 3, 4]

// Expected Output:
// 2

// Test 2
// Input:
// a: [1, 1, 2, 1, 2, 1, 1]

// Expected Output:
// 5

// Test 3
// Input:
// a: [1]

// Expected Output:
// 0

// Test 4
// Input:
// a: [1, 1000, 1]

// Expected Output:
// 1

// Test 5
// Input:
// a: [1, 2, 3, 1, 2, 3]

// Expected Output:
// 0

// Test 6
// Input:
// a: [1, 2, 3, 3, 2, 1]

// Expected Output:
// 2

// Test 7
// Input:
// a: [1, 2, 3, 2, 1]

// Expected Output:
// 1

// Test 8
// Input:
// a: [1, 1, 1]

// Expected Output:
// 0

// Test 9
// Input:
// a: [1, 2, 2, 1, 1, 2, 2, 1]

// Expected Output:
// 6

// Test 10
// Input:
// a: [1, 2, 2, 3, 4, 3, 5, 5, 6]

// Expected Output:
// 5