// This problem follows the Sliding Window pattern, and we can use a similar strategy as discussed in Maximum Sum Subarray of Size K. There is one difference though: in this problem, the sliding window size is not fixed. Here is how we will solve this problem:

// First, we will add-up elements from the beginning of the array until their sum becomes greater than or equal to ‘S.’
// These elements will constitute our sliding window. We are asked to find the smallest such window having a sum greater than or equal to ‘S.’ We will remember the length of this window as the smallest window so far.
// After this, we will keep adding one element in the sliding window (i.e., slide the window ahead) in a stepwise fashion.
// In each step, we will also try to shrink the window from the beginning. We will shrink the window until the window’s sum is smaller than ‘S’ again. This is needed as we intend to find the smallest window. This shrinking will also happen in multiple steps; in each step, we will do two things:
// Check if the current window length is the smallest so far, and if so, remember its length.
// Subtract the first element of the window from the running sum to shrink the sliding window.

function min_subarray_sum(s, arr) {
    let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd]; //add the next element
        // shrink the window as small as possible until the windowSum is smaller than 's'

        while(windowSum >= s){
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart += 1; 
        }
    }

    if(minLength === Infinity){
        return 0;
    }
    return minLength;
}


console.log(`Smallest subarray length: ` + smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2]));
console.log(`Smallest subarray length: ` + smallest_subarray_sum(7, [2, 1, 5, 2, 8]));
console.log(`Smallest subarray length: ` + smallest_subarray_sum(8, [3, 4, 1, 1, 6]));


// time complexity O(n)
// space complexity O(1)

// ***The time complexity of the above algorithm will be O(N)O(N). The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent to O(N)O(N).