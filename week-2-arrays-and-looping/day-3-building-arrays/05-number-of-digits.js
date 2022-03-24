// Description

// Given a number, return the number of digits.

// You may not use strings to solve this challenge.

// You might have to get mathy for this one.

function solution(n) {
    if(n === 0 ) return 1
    return Math.floor(Math.log10(Math.abs(n))) + 1
}
