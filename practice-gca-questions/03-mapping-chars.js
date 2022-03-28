// You are given an array of strings arr. Your task is to construct a string from the words in arr, starting with the 0th character from each word (in the order they appear in arr), followed by the 1st character, then the 2nd character, etc. If one of the words doesn't have an ith character, skip that word.

// Return the resulting string.

// Example

//     For arr = ["Daisy", "Rose", "Hyacinth", "Poppy"], the output should be solution(arr) = "DRHPaoyoisapsecpyiynth".
//         First, we append all 0th characters and obtain string "DRHP";
//         Then we append all 1st characters and obtain string "DRHPaoyo";
//         Then we append all 2nd characters and obtain string "DRHPaoyoisap";
//         Then we append all 3rd characters and obtain string "DRHPaoyoisapaecp";
//         Then we append all 4th characters and obtain string "DRHPaoyoisapaecpyiy";
//         Finally, only letters in the arr[2] are left, so we append the rest characters and get "DRHPaoyoisapaecpyiynth";

function solution(arr) {
    let current = '';
    let answer = '';
    let map = {};
    
    // ['daisy', 'rose', 'hyacinth', 'poppy']
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(map[j] === undefined){
            map[j] = [arr[i][j]]
            }else {
            map[j].push(arr[i][j])
            }
        }
    }
    console.log(map)
    let returnStr = '';
    for(key in map){
        returnStr += map[key].join('')
    }
    console.log(returnStr)
    return returnStr;
}

// {0: [d,r,h,p], 1: [a, o, y, o], 2: [i, s, a, p], 3: [s, e, c, p], 4: [y, i, y], 5: [n], 6: [t], 7: [h]}

// Test 1
// Input:

let test1 =["Daisy", 
 "Rose", 
 "Hyacinth", 
 "Poppy"];

 solution(test1)
// Output:

// null

// Expected Output:

// "DRHPaoyoisapsecpyiynth"

// Test 2
// Input:

// arr:
// ["E", 
//  "M", 
//  "I", 
//  "L", 
//  "Y"]

// Output:

// undefined

// Expected Output:

// "EMILY"

// Test 3
// Input:

// arr: ["clever"]

// Output:

// undefined

// Expected Output:

// "clever"

// Test 4
// Input:

// arr:
// ["Weather", 
//  "can", 
//  "be", 
//  "stormy", 
//  "or", 
//  "rainy", 
//  "or", 
//  "sunny"]

// Output:

// undefined

// Expected Output:

// "Wcbsoroseaetraruanointrnnhmyyeyr"