// This problem follows the Sliding Window pattern and is quite similar to Longest Substring with K Distinct Characters. In this problem, we need to find the length of the longest subarray with no more than two distinct characters (or fruit types!). This transforms the current problem into Longest Substring with K Distinct Characters where K=2.

// time: O(n)
// space: O(1)

function fruitBaskets(fruits){
    let windowStart = 0,
        maxLength = 0,
        fruitFrequency = {};

    for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++){
        const rightFruit = fruits[windowEnd];
        if(!(rightFruit in fruitFrequency)){
            fruitFrequency[rightFruit] = 0;
        }

        fruitFrequency[rightFruit] += 1;

        while(Object.keys(fruitFrequency).length > 2){
            const leftFruit = fruits[windowStart];
            fruitFrequency[leftFruit] -= 1;
            if(fruitFrequency[leftFruit] === 0){
                delete fruitFrequency[leftFruit];
            }
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}