// You are given an array of integers a. Your task is to calculate how many numbers in the array are equal to the arithmetic mean of their immediate neighbors.
// In other words, count the number of indices i such that a[i] = (a[i - 1] + a[i + 1]) / 2.
// Note: If a[i - 1] or a[i + 1] don't exist, they should be considered equal to 0.

function solution(a) {
    let count = 0;
    
    for(let i = 0;i < a.length; i++){
        let current = a[i];
        let prev = a[i - 1] | 0;
        let next = a[i + 1] | 0;
        if((prev + next) / 2 === current) count += 1
    }
    
    return count;
}




// test cases
// Test 1
// Input:
// a: [2, 4, 6, 6, 3]

// Expected Output:
// 3

// Test 2
// Input:
// a: [1, 3, 2]

// Expected Output:
// 0

// Test 3
// Input:
// a: [1]

// Expected Output:
// 0

// Test 4
// Input:
// a: [7, 8, 9, 9, 8, 7]

// Expected Output:
// 2


// Test 5
// Input:
// a: [0]

// Expected Output:
// 1

// Test 6
// Input:
// a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Expected Output:
// 8

// Test 7
// Input:
// a: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12]

// Expected Output:
// 8