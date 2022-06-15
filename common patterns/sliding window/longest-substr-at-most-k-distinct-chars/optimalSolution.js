// This problem follows the Sliding Window pattern, and we can use a similar dynamic sliding window strategy as discussed in Smallest Subarray with a Greater Sum. We can use a HashMap to remember the frequency of each character we have processed. Here is how we will solve this problem:

// First, we will insert characters from the beginning of the string until we have K distinct characters in the HashMap.
// These characters will constitute our sliding window. We are asked to find the longest such window having no more than K distinct characters. We will remember the length of this window as the longest window so far.
// After this, we will keep adding one character in the sliding window (i.e., slide the window ahead) in a stepwise fashion.
// In each step, we will try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than K. We will shrink the window until we have no more than K distinct characters in the HashMap. This is needed as we intend to find the longest window.
// While shrinking, we’ll decrement the character’s frequency going out of the window and remove it from the HashMap if its frequency becomes zero.
// At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.

// time: O(n)
// space: O(k)

// **The below algorithm’s time complexity will be O(N)O(N), where NN is the number of characters in the input string. The outer for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent to O(N)O(N).
// **The algorithm’s space complexity is O(K)O(K), as we will be storing a maximum of K+1K+1 characters in the HashMap.


function longest(string, k){
    let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

    // in the following loop we'll try to extend the range [window_start, window_end]
    for(let windowEnd = 0; windowEnd < string.length; windowEnd++){
        const rightChar = string[windowEnd];
        if(!(rightChar in charFrequency)){
            charFrequency[rightChar] = 0;
        } 
        charFrequency[rightChar] += 1;
        // shrink the sliding window , until we are left with 'k' distict characters in the charFrequency
        while(Object.keys(charFrequency).length > k){
            const leftChar = str[windowStart];
            charFrequency[leftChar] -= 1;
            if(charFrequency[leftChar] === 0){
                delete charFrequency[leftChar];
            }
            windowStart += 1; //shrink the window
        }
        // track the max length thus far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(`Length of the longest substring: `
              + longest_substring_with_k_distinct('araaci', 2));
console.log(`Length of the longest substring: `
              + longest_substring_with_k_distinct('araaci', 1));
console.log(`Length of the longest substring: ` 
              + longest_substring_with_k_distinct('cbbebi', 3));