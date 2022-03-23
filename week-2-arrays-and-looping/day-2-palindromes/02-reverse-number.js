// Description
// Return a number with its digits reversed.
// The return value should be an integer.
// *tip: integers don't have any leading zeros

// sample test cases:
const n = 12 //(expect 21)
// const a = 3490 (expect 943)
// const b = 239212947 (expect 749212932)
// const c = 30344061 (expect 16044303)

function solution(n) {
    let intStr = String(n)
    let reverse = intStr.split('').reverse().join('')
    
    if(intStr.length === 1) return n;
    if(reverse[0] === 0){
        return reverse.substring(1)
    }
    return Number(reverse)
}

console.log(solution(n))
