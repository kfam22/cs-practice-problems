// Description

// An odometer palindrome is the when the mileage on your odometer is the same when the digits are reversed. For example, 123321.

// Assume your odometer is 6 digits and does not show 10ths of miles/kilometers.

// The question is, for a given current odometer reading, when is the next odometer palindrome?

// If the odometer is currently at a palindrome, we're still interested in the next one.

// The input is an integer, but the result should be a string padding with leading zeros to 6 places.

function solution(current) {
    if (current === 999999) return '000000';
    current++;
    while(!isAPalindrome(current)){
        current++;
        
    }
    return makeStringValue(current);
}

function makeStringValue(value){ 37
    const valueToString = String(value);
    const diff = 6 - valueToString.length;
    const zeros = Array(diff).fill('0').join('');
    return zeros + valueToString;
}

function isAPalindrome(value){
    const valueToCorrectFormat = makeStringValue(value);
    return valueToCorrectFormat === valueToCorrectFormat.split('').reverse().join('');
}

