// Count the number of occurrences of certain letters in a string.
// We want to know the counts of each of a set of letters in the input string. For instance, we might want to know how many as, xs, and js there are.
// You'll return the list of requested counts as an array.
// If letters is an empty string, return an empty array.

function solution(s, letters) {
    let map = {};
    
    if(!letters) return [];
    
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === undefined){
            map[s[i]] = 1;
        } else{
            map[s[i]] += 1;
        }
    }
    
    
    const letterCount = [];
    for(let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        const currentCount = map[letter] | 0;
        letterCount.push(currentCount);
    }
    
    return letterCount;
}


// test cases

// Test 1
// Input:
// s: "aaabbbb"
// letters: "ab"

// Expected Output:
// [3, 4]

// Test 2
// Input:
// s: "ababababaca"
// letters: "ac"

// Expected Output:
// [6, 1]

// Test 3
// Input:
// s: "dielktnumdamjxgsxkdncnqzdtvpwvuzgwhbutveulognsbglq"
// letters: "oqdwd"

// Expected Output:
// [1, 2, 4, 2, 4]