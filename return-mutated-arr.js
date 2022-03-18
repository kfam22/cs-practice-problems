// Given an integer n and an array a of length n, your task is to apply the following mutation to a:

// Array a mutates into a new array b of length n.
// For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
// If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. For example, b[0] should be equal to 0 + a[0] + a[1].

function solution(n, a) {
    let b = []
    for(let i = 0; i < n; i++){
        let minusOne = a[i - 1]
        let plusOne = a[i + 1]
        if(!a[i - 1]){
            minusOne = 0;
        }
        if(!a[i + 1]){
            plusOne = 0;
        }
        
        b.push(minusOne + a[i] + plusOne)
        
    }
    return b;
}