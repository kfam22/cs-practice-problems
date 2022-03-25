// Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

// Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.


function solution(s, x) {
    if(s === x) return 0;
    for(let i = 0; i <= s.length - x.length; i++){
        if(s[i] === x[0] && s[i + x.length - 1] === x[x.length - 1]){
        let window = [];
        let idx = i;
        while(window.length < x.length){
            window.push(s[idx])
            idx += 1
        }       
        console.log(window)
          if(window.join('') === x) return i;
    }}
    return -1;
}


// test cases

// Test 1
// Input:
// s: "CodesignalIsAwesome"
// x: "IA"

// Expected Output:
// -1

// Test 2
// Input:
// s: "CodesignalIsAwesome"
// x: "IsA"

// Expected Output:
// 10

// Test 3
// Input:
// s: "a"
// x: "a"

// Expected Output:
// 0

// Test 4
// Input:
// s: "a"
// x: "A"

// Expected Output:
// -1

// Test 5
// Input:
// s: "sst"
// x: "st"

// Expected Output:
// 1

// Test 6
// Input:
// s: "lrnkbldxguzgcseccinlizyogwqzlifxcthdgmanjztlt"
// x: "an"

// Expected Output:
// 38

// Test 7
// Input:
// s: "ffbefbdbacbccecaceddcbcaeaebfedfcfdbeecffdbbf"
// x: "cb"

// Expected Output:
// 9


// Test 8
// Input:
// s: "aBcDefghaBcdEFgh"
// x: "ghb"

// Expected Output:
// -1

// Test 9
// Input:
// s: "abCdefGHBIabcdefgh"
// x: "ghb"

// Expected Output:
// -1

// Test 10
// Input:
// s: "abcdefghabcdefghi"
// x: "ghi"

// Expected Output:
// 14

// Test 11
// Input:
// s: "fefcafcdedeceadbbdaacdbdcdaeb"
// x: "ef"

// Expected Output:
// 1


// Test 12
// Input:
// s: "ATErUUeUkVFVNfxfUKtntOErKmZLUpWpHRASdxjUhzzxygmnNnKabPPgPqyvCLSCZObaNNGCXQssfEEDDJIPBwtkMmTniKapBlrd"
// x: "vCLSCZObaNNGCXQssfEEDDJIPBwtkMmTniKa"

// Expected Output:
// 59

// Test 13
// Input:
// s: "IckcYWDCgWkDBMudMVWZOBatEloOzayVtvsLgUSsaaFxZQAivbqtuGerRravCLSCZObaNNGCXQssfEEDDJIPBwtkMmTniKxNrWZl"
// x: "vCLSCZObaNNGCXQssfEEDDJIPBwtkMmTniKa"

// Expected Output:
// -1

// Test 14
// Input:
// s: "GTgpEYIWKIWrlEtByHryETrBeTWNkHutWKOCvVNRSGSxaynjzTatJMKSwCLSCZObaNNGCXQssfEEDDJIPBwtkMmTniKaKfqaOtvO"
// x: "vCLSCZObaNNGCXQssfEEDDJIPBwtkMmTniKa"

// Expected Output:
// -1