// Given two strings s and t, both consisting of lowercase English letters and digits, your task is to calculate how many ways exactly one digit could be removed from one of the strings so that s is lexicographically smaller than t after the removal. Note that we are removing only a single instance of a single digit, rather than all instances (eg: removing 1 from the string a11b1c could result in a1b1c or a11bc, but not abc).

// Also note that digits are considered lexicographically smaller than letters.
// test cases
// s = '3ab'
// t = 'cd'
// should return 1

// s = '123ab'
// t = '423cd'
// should return 6

function solution(s, t) {
    let goodChange = 0;
    let mutatedS = '';
    let mutatedT = '';
    
    // if("mutatedS".localeCompare("t") > 0) return true;
    // return false
    
    for(let i = 0; i < s.length; i++){
        if(isNumeric(s[i])){
            mutatedS = s.slice(0, s[i]) + s.slice(s[i + 1])
            console.log(mutatedS)
        }
        if(mutatedS.localeCompare(t) > 0) {
            goodChange += 1
        }
    }
    
    for(let i = 0; i < t.length; i++){
        if(isNumeric(t[i])){
            mutatedT = t.slice(0, t[i]) + t.slice(t[i + 1])
        }
        if(s.localeCompare(mutatedT) > 0) {
            goodChange += 1
        }
    }
        return goodChange;
    }
    
    function isNumeric(char) {
        return !isNaN(char);
    }

    console.log(solution('3ab', 'cd'))
    console.log(solution('123ab', '423cd'))
