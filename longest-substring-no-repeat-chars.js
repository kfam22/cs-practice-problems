// Given a string s, find the length of the longest substring without repeating characters.

// test case:
const s = "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let max = 0;
    let sub = {};
    
    for(let end = 0; end < s.length; end++){
        if(sub[s[end]] !== undefined && sub[s[end]] >= start){
            start = sub[s[end]] + 1
        }
        sub[s[end]] = end;
        max = Math.max(max, end - start + 1)
    }
    return max;
};