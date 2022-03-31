// Description
// Given a string of lowercase words separated by single spaces, return a string with all duplicate words removed. However, the first occurrence of a duplicate word should be left in place; only the subsequent duplicates should be removed.
// If the string is empty, return an empty string.

function solution(s) {
    const sArray = s.split(' ');
    const words ={};
    for(let word of sArray) {
        words[word] = 'anything';
    }
    const newSArray = [];
    for(let word in words) {
        newSArray.push(word);
    }
    return newSArray.join(' ');
}

// test cases

// Test 1
// Input:
// s: "sample this is this sample"

// Expected Output:
// "sample this is"

// Test 2
// Input:
// s: "a b c a b c"

// Expected Output:
// "a b c"

// Test 3
// Input:
// s: "a a a b b b c c c a a a"

// Expected Output:
// "a b c"