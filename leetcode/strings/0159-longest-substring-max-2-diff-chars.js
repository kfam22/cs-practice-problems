// 159. longest substring with at most, two distinct characters
// given the string s, return the length of the longest substring that contains at most two distinct characters

// test case 1:
// input
s1 = 'eceba'
// output
// 3 'ece' is the longest substring

// test case 2:
// input
s2 = 'ccaabbb'
// output
// 5 'aabbb' is the longest substring

function longestSubstring(substr) {
    let current = substr[0];
    let longest = current;
    let uniqueLetters = [substr[0]];
    console.log(current);

    for(let i = 1; i < substr.length; i++) {
        if(uniqueLetters.includes(substr[i])) current += substr[i];
        else if(uniqueLetters.length < 2){
            uniqueLetters.push(substr[i]);
            current += substr[i];
        }
        else current = substr[i];
        longest = Math.max(current.length, longest.length);

    };
}

longestSubstring(s1)