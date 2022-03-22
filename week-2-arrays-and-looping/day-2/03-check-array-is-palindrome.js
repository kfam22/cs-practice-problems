// Description
// This function accepts an array. It should return true if the array elements read the same forward and backward, i.e. if the array is a palindrome.

// sample test cases:
const a = [76, 7, 46, 44, 56] //(expect false)
// const b = [70, 75, 36, 75, 70] (expect true)
// const c = [94, 42, 28, 76, 98, 44] (expect false)
// const d = [66, 73, 42, 42, 73, 66] (expect true)

function solution(a) {
    let b = [...a].reverse()
    return arraysEqual(a, b);
}

function arraysEqual(a, b) {
   return Array.isArray(a) &&
       Array.isArray(b) &&
       a.length === b.length &&
       a.every((val, index) => val === b[index]);
}

console.log(solution(a));