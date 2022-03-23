// Description

// Return a substring (part of a string) between two indexes.

// The substring from index a up to (but not including) index b should be returned.

// If a is less than 0, treat it like 0.

// If b is greater than the length of the string, treat it like the length of the string.

// If b is less than a, return an empty string.

function solution(s, a, b) {
    if(b < a) return '';
    return s.substring(a,b);
}
