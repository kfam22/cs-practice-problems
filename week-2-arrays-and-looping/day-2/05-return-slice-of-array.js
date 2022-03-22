// Description
// Return a slice of array a starting from index start and ending before index end.
// If end is less than or equal to start, return an empty array.
// Note that start and end could be beyond the length of the array. They should be clamped between 0 and the length of the array minus 1.

// sample test cases:
const a = [0, 11, 22, 33, 44, 55]
const start = 2
const end = 4

// const a = [0, 11, 22, 33, 44, 55, 66, 77]
// const start = 4
// const end = 99

function solution(a, start, end) {
    if(end <= start) return [];
    if(start < 0) start = 0;
    return a.slice(start, end)
}

console.log(solution(a,start,end))