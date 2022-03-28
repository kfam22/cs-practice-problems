// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example
//     For s = "abacabad", the output should be
//     solution(s) = 'c'.

//     There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

//     For s = "abacabaabacaba", the output should be
//     solution(s) = '_'.

//     There are no characters in this string that do not repeat.

function solution(s) {
    let map = {};
    
    // track the number of occurences of each character and store them in map
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === undefined){
            map[s[i]] = 1;
        }else {
            map[s[i]] += 1;
        }
    }
    
    // check map for the first character only occuring once
    for(key in map){
        if(map[key] === 1){
            return key;
        }
    }
    // return '_' if all characters repeat
    return '_';
}


// test  cases
// Test 1
// Input:
// s: "abacabad"

// Expected Output:
// "c"


// Test 2
// Input:
// s: "abacabaabacaba"

// Expected Output:
// "_"

// Test 3
// Input:
// s: "z"

// Expected Output:
// "z"


