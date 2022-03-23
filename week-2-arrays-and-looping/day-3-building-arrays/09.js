// Description

// An odometer palindrome is the when the mileage on your odometer is the same when the digits are reversed. For example, 123321.

// Assume your odometer is 6 digits and does not show 10ths of miles/kilometers.

// The question is, for a given current odometer reading, when is the next odometer palindrome?

// If the odometer is currently at a palindrome, we're still interested in the next one.

// The input is an integer, but the result should be a string padding with leading zeros to 6 places.

function solution(current) {
    if(current === 999999) return '000000'
    
    // let numArr = (current + '').split('')
    current++;
    while(!isPalindrome(current)) {
        current++;
    }
    return makeStringValue(current)
    
    
    
    
    // for(let i = 0; i < )
}

function makeStringValue(val) {
    const valToString = String(val)
    const diff = 6 - valToString;
    const zeros = Array(diff).
}

function reverse(num) {
    return Number((num + '').split('').reverse().join(''))
}
