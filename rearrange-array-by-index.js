// Given an array of integers numbers, construct a new array based on sorting numbers in the the following manner:
// The first element of the new array is the first element of numbers;
// The second element of the new array is the last element of numbers;
// The third element of the new array is the second element of numbers;
// The fourth element of the new array is the second-to-last element of numbers;
// ... and so on, until the new array contains all elements of numbers.
// Example
// For numbers = [0, 4, 3, 2, 1], the output should be solution(numbers) = [0, 1, 4, 2, 3].
// Explanation:
// Following the rules above, we sort the array into the following sequence numbers[0], numbers[4], numbers[1], numbers[3], numbers[2], which results in [0, 1, 4, 2, 3].
// For numbers = [-5, 4, 0, 3, 2, 2], the output should be solution(numbers) = [-5, 2, 4, 2, 0, 3].
// Explanation:
// Following the rules above, we sort the array into the following sequence numbers[0], numbers[5], numbers[1], numbers[4], numbers[2], numbers[3], which results in [-5, 2, 4, 2, 0, 3].
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.integer numbers
// An array of integers.
// Guaranteed constraints:
// 3 ≤ numbers.length ≤ 1000,
// -1000 ≤ numbers[i] ≤ 1000.
// [output] array.integer
// An array of integers after sorting numbers based on the rules described above.

const numbers = [0, 4, 3, 2, 1]

function solution(numbers){
    let end = numbers.length - 1;
    let sorted = [];

    for(let start = 0; start <= end; start++ ){
        sorted.push(numbers[start])
        if(start !== end){
            sorted.push(numbers[end])
            end--
        }
    }
    return sorted;
    }

    // take 2 w while loop
    function solution2(numbers){
        let start = 0;
        let end = numbers.length - 1;
        let sorted = [];
    
        while(start <= end){
            sorted.push(numbers[start])
            if(start !== end){
              sorted.push(numbers[end])
            }
            start++
            end--
        }
        return(sorted)
        }
    

solution([0, 4, 3, 2, 1])
console.log(`expected outcome: ${[0, 1, 4, 2, 3]}`)

//   > i
//  [0, 1, 4, 2, 3]
//            j <    