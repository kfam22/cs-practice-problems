// Description
// Count all the words in a string, then produce a new string when the count of each word in parentheses follows each word.
// If the string is empty, return an empty string.

function solution(s) {
    const sArray = s.split(' ');
    const words = {};
    
    if(s.length === 0) return '';
    for(let word of sArray) {
        if(word in words) words[word]++;
        else words[word] = 1;
    }
    
    const newSArray = [];
    for(let word of sArray) {
        const wordCount = words[word];
        const newWord = `${word}(${wordCount})`;
        newSArray.push(newWord)
    }
    return newSArray.join(' ');
}

// test cases

// Test 1
// Input:
// s: "abc"

// Expected Output:
// "abc(1)"

// Test 2
// Input:
// s: "goat goat"

// Expected Output:
// "goat(2) goat(2)"