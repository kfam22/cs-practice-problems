// Description
// Examine an array and determine the length of the longest run of elements. That is, the most of a particular element seen in a row.

// sample test cases:
const a = [1, 2, 3] //(expect 1);
// const b = [1, 1, 2, 3] (expect 2)
// const c = [1, 2, 2, 3] (expect 2)
// const d = [1, 2, 2, 3, 3, 3] (expect 3)


function solution(a) {
    if(a.length === 0) return 0;
    let currentNum = a[0];
    let count = 1;
    let longest = 1;
    
    for(let i = 1; i < a.length; i++){
        let num = a[i];
        if(num !== currentNum) {
            count = 1;
            currentNum = num;
        } else {
            count++;
            if(count > longest) longest = count;
        }
    }
    return longest;
}

console.log(solution(a));