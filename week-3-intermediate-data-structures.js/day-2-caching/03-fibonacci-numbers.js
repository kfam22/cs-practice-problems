// Description

// This challenge is about computing Fibonacci Numbers.

// This is a famous numeric sequence that starts 0,1, and then each subsequent number is the sum of the previous two.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

// Each Fibonacci value also has an index number, starting with 0:

// 0  1  2  3  4  5  6   7   8   9  10  11        Index number
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...     Corresponding Fibonacci number

// So, for example, the 7th Fibonacci number is 13. And the 0th is 0.

// We want our algorithm to compute the nth Fibonacci number. If we pass it 7, it should return 13.

// We've already described the algorithm. The first numbers are 0 and 1, and then each number after that is the sum of the previous two.

// fib(n) is defined as:

//     // The 0th Fibonacci number is 0
//     if n is 0, return 0

//     // The 1st Fibonacci number is 1
//     if n is 1, return 1

//     // The nth Fibonacci number is the sum of the two previous numbers
//     return fib(n-1) + fib(n-2)

// If this is the first time you've seen recursion, it might blow your mind a bit. Don't try to follow it--that way lies madness.

// Instead try to see the simple truth of the algorithm. The 0th and 1st numbers are 0 and 1, otherwise the nth number is the sum of the previous two Fibonacci numbers. That's what we said it was originally, after all.

// But this algorithm has a problem. Each call to fib() results in two more calls to fib(). It's like a chain reaction that increases exponentially. This works fine for small n, but times out for larger n.

// The problem is that there's a lot of duplicated calculation.

// Computing the 7th means we need to compute the 6th and 5th. And for the 6th we need the 5th and 4th. And for the 5th we need the 4th and 3rd. So we're computing the 5th number twice. And the 4th 3 times. And the 3rd 5 times. And it just keeps getting worse.

// A strategy called memoization can save the day. Make an object (called a cache) where the keys are the indexes of the Fibonacci number, and the values are the numbers themselves.

// {
//     0: 0,
//     1: 1,
//     2: 1,
//     3: 2,
//     4: 3,
//     // and so on
// }

// but built it as you go. So before you figure that

// fib(n) = fib(n-1) + fib(n-2)

// first check the object to see if n is a key in there already. If it is, it means you've already computed it and there's no need to do it again.

// So the algorithm becomes something like this:

// cache = {}

// fib(n) is defined as:

//     // The 0th Fibonacci number is 0
//     if n is 0, return 0

//     // The 1st Fibonacci number is 1
//     if n is 1, return 1

//     if n is not in the cache:
//         // The nth Fibonacci number is the sum of the two previous numbers
//        cache[n] = fib(n-1) + fib(n-2)

//     return cache[n]

// If you can use in operator to see if a key is in an object, e.g.:

// if (!(n in cache))
