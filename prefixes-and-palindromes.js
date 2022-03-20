// You are given a string s. Consider the following algorithm applied to this string:

// Take all the prefixes of the string, and choose the longest palindrome between them.
// If this chosen prefix contains at least two characters, cut this prefix from s and go back to the first step with the updated string. Otherwise, end the algorithm with the current string s as a result.
// Your task is to implement the above algorithm and return its result when applied to string s.

// test case
// const s = "aaacodedoc"
// expected output: ""

// another test case
// const s = "abbab"
// expected output: "b"

function solution(s) {
    const prefixes =[]
    if(s.length === 0){
        return ""
    } 
    if(s.length === 1){
        return s
    } 
    
    // double for loop finds all possible prefixes
    for(let i = 0; i < 1; i++){
        for(let j = i; j < s.length; j++){
            const substr = s.substring(i, j + 1)
            prefixes.push(substr)
        }
    }
    
    // filter returns array of palindromes
    const palindromes = prefixes.filter(prefix => {
        let reverse = prefix.split('').reverse().join('');
        return prefix === reverse
    })
   
    // find the longest palindrome
    let longest = palindromes.sort(
    function (a, b) {
        return b.length - a.length;
    })[0];

    // if longest palindrome is longer than 2,remove palindrome from string and repeat
     if(longest.length >= 2){
        s = s.substring(longest.length)
        return solution(s)
     } else{
        return s; 
     }
    }


    // function reverseStr(str) {
    //     return str.split('').reverse().join('');
    // }