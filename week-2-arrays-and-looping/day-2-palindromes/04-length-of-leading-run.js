// Description
// Given an input array a determine the length of the leading "run" of numbers. The run is how many numbers at the front of the array are the same.
// If the array is empty, return 0.

// sample test cases
const a = [2, 2, 2, 2, 3, 2, 3, 3, 3, 7, 1, 10, 5, 9, 10, 3, 7, 3, 6, 6, 4] //(expect 4)
// const b = [4, 10, 4, 4, 4, 4] (expect 1)
// const c = [9, 9, 1, 7, 9, 5, 7, 5, 10, 3, 6, 5, 7, 6, 2, 3, 5, 8, 7, 3] (expect 2)

function solution(a) {
    let count = 1;
    let first = a[0];
    let currentIdx = 1;
    
    if(a.length === 0) return 0;
    while(a[currentIdx] === first){
        count += 1;
        currentIdx++
    }
    return count;
}

console.log(solution(a));