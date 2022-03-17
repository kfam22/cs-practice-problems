// Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array. Return the array of these digits in ascending order.

// Example

// For a = [25, 2, 3, 57, 38, 41], the output should be solution(a) = [2, 3, 5].

// Here are the number of times each digit appears in the array:

// 0 -> 0
// 1 -> 1
// 2 -> 2
// 3 -> 2
// 4 -> 1
// 5 -> 2
// 6 -> 0
// 7 -> 1
// 8 -> 1
// The most number of times any number occurs in the array is 2, and the digits which appear 2 times are 2, 3 and 5. So the answer is [2, 3, 5].



function solution(a) {
    let newA = a.map(num => String(num))
    let digits = [];
    for(num in newA){
        newA[num].split('').forEach(strNum => digits.push(Number(strNum)))
    }
    console.log( digits)
    let digitCount = {}
    for(let i = 0; i < digits.length; i++){
        if(digitCount[digits[i]]){
            digitCount[digits[i]] += 1
        } else{
            digitCount[digits[i]] = 1
        }
    }
    
    let maxValue = Math.max(...Object.values(digitCount))
    let returnArr = []
    for(key in digitCount){
        if(digitCount[key] === maxValue){
            returnArr.push(Number(key))
        }
    }
    return returnArr
     // let stringNum = String(a[0])
     // stringNum = stringNum.split('')
     // newArr = stringNum.map(str => Number(str))
 }
 