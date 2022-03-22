// Run-length encoding algorithm (RLE) works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence.
// You need to implement an algorithm that applies the RLE to a given string.

// sample test cases:
const inputString = "abbaaaac" //(expect "1a2b4a1c")
// const inputString1 = "a" //(expect "1a")
// const inputString1 = "aaaaa" //(expect "5a")
// const inputString2 = "ababab" //(expect "1a1b1a1b1a1b")
// const inputString3 = "aaabbbvvf" //(expect "3a3b2v1f")
// const inputString4 = "zzzzzzzzzzzddffrrrrlllkokkkp" //(expect "11z2d2f4r3l1k1o3k1p")
// const inputString5 = "abbabba" //(expect "1a2b1a2b1a")
// const inputString6 = "abcdefghijklmnopqrstuvwxyz" //(expect "1a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z")



function solution(inputString) {
    let currentCount = 1;
    let currentLetter = inputString[0];
    let answer = '';
    for(let i = 1; i < inputString.length; i++){
        if(inputString[i] !== currentLetter){
            answer += currentCount + currentLetter;
            currentCount = 1;
            currentLetter = inputString[i];
        } else {
            currentCount++;
        }
    }
    return answer += currentCount + currentLetter;
}

console.log(solution(inputString))