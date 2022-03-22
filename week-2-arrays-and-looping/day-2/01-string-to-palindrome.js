// Description
// Return true if a string is a palindrome.
// A palindrome is a word that is spelled the same forward and backward.
// An empty string is a palindrome.

// example test cases:
const s = "vpZpv" //(expect true)
// const a = "ZjJoJjZ" (expect true)
//const  b = "DTSIJoDWhrcipfdBIngK" (expect false)
// const c = "glpCkSIrhIeIhrISkCplg" (expect true)

function solution(s) {
    let reverse = s.split('').reverse().join('');
    return reverse === s
}

console.log(solution(s))