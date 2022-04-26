// Leetcode #66 Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.


var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        digits[i]++;
        if(digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    
    digits.unshift(1);
    return digits;
};


// the dumb way
// var plusOne = function(digits) {
//     strNum = Number(digits.join(''));
//     strNum++;
//     console.log(typeof strNum, strNum)
//     strNum = strNum.toString().split('');
//     strNum.forEach(elem => Number(elem))
//     return strNum;
// };


// test case
// [1,2,3]
// expected [1,2,4]