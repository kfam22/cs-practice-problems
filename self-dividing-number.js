// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.
// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

var selfDividingNumbers = function(left, right) {
    let answer = [];
    for(let i = left; i < right + 1; i++){
        if(isSelfDividingNum(i)){
            answer.push(i)
        }
    }
    console.log(answer)
    return answer;
};


function isSelfDividingNum(num){
    let strNum = String(num);
    for(let i = 0; i < strNum.length; i++){
        if(strNum[i] === 0) return false;
        if(strNum % strNum[i] !== 0) return false;
    }
    return true;
}

// 1) determine if a number is self divisible
        //     break up num into digits
        //     iterate for number of digits and check if they are divisible
        //     if at any. point a digit is 0 -> return false
        //     if at any point not divisible -> return false
        //     if we successfully finish the loop return true
// 2) need to iterate over the numbers from left to right inclusive
// 3) create and edit a list throughout the iteration to return at the end

selfDividingNumbers(1, 22)