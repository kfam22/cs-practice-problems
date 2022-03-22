// Description
// Construct a string of p copies of n capital "A"s and m capital "B"s.
// Except if the copy number is evenly divisible by 3, in which case insert a string of p capital "X"s instead.
// Copy numbers begin with 0 for the first copy.
// Do not use any built-in string duplication functionality to solve this.

function solution(p, n, m) {
    let returnString = '';
    let as =  Array(n).fill('A').join('');
    let bs = Array(m).fill('B').join('');
    let xs = Array(p).fill('X').join('');
    for (let copyNumber = 0; copyNumber < p; copyNumber++) {
        copyNumber % 3 === 0 ? returnString += xs : returnString += as + bs;
    }
    return returnString;
}
