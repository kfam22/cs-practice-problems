// You are implementing your own programming language and you've decided to add support for merging strings. A typical merge function would take two strings s1 and s2, and return the lexicographically smallest result that can be obtained by placing the symbols of s2 between the symbols of s1 in such a way that maintains the relative order of the characters in each string.
// For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".

// You'd like to make your language more unique, so for your merge function, instead of comparing the characters in the usual lexicographical order, you'll compare them based on how many times they occur in their respective initial strings (fewer occurrences means the character is considered smaller). If the number of occurrences are equal, then the characters should be compared in the usual lexicographical way. If both number of occurences and characters are equal, you should take the characters from the first string to the result. Note that occurrences in the initial strings are compared - they do not change over the merge process.

// Given two strings s1 and s2, return the result of the special merge function you are implementing.

// Example

// For s1 = "dce" and s2 = "cccbd", the output should be
// solution(s1, s2) = "dcecccbd".
// All symbols from s1 goes first, because all of them have only 1 occurrence in s1 and c has 3 occurrences in s2.



// For s1 = "super" and s2 = "tower", the output should be
// solution(s1, s2) = "stouperwer".
// Because in both strings all symbols occur only 1 time, strings are merged as usual. You can find explanation for this example on the image in the description.

function solution(s1, s2) {
    let mergedWord = ""
    let s1Index = 0
    let s2Index = 0
    let combinedLength = s1.length + s2.length
    let s1Count = {}
    let s2Count = {}
    for(character in s1){
        if(s1Count[s1[character]]){
            s1Count[s1[character]] += 1
        } else {
            s1Count[s1[character]] = 1
        }
    }
    
    for(character in s2){
        if(s2Count[s2[character]]){
            s2Count[s2[character]] += 1
        } else {
            s2Count[s2[character]] = 1
        }
    }
    while(mergedWord.length < combinedLength){
        if(!s1[s1Index]){
            mergedWord += s2[s2Index]
            s2Index++
            continue
        }
        if(!s2[s2Index]){
            mergedWord += s1[s1Index]
            s1Index++
            continue
        }
        if(s1Count[s1[s1Index]] === s2Count[s2[s2Index]]) {
        if(s1[s1Index].localeCompare(s2[s2Index]) === 1){
            mergedWord += s2[s2Index]
            s2Index++
        } else if(s1[s1Index].localeCompare(s2[s2Index]) === -1){
            mergedWord += s1[s1Index]
            s1Index++
        } else {
            mergedWord += s1[s1Index]
            s1Index++
        }
        } else if(s1Count[s1[s1Index]] > s2Count[s2[s2Index]]){
            mergedWord += s2[s2Index]
            s2Index++
            continue
        } else{
            mergedWord += s1[s1Index]
            s1Index++
        } 
    }
    return mergedWord
}