let arr = [1,2,3,4,5,6,7,8,9];

// take 1
function binarySearch(arr, elem) {
 let start = 0;
 let end = arr.length - 1;
 let middle = Math.floor((start + end) / 2);

 while(arr[middle] !== elem && start <= end) {
   if(arr[middle] < elem) start = middle + 1;
   else end = middle -1;
   middle = Math.floor((start + end) /2);
 }
 return arr[middle] === elem ? middle :  -1;
}

console.log(binarySearch(arr, 3));

// take 2
function binarySearch() {
    let a = [1, 3, 5, 7, 10, 12, 16, 17, 19, 21, 28, 29];
    const numberToFind = 29;
    let operations = 0;
    while(true) {
        operations++;
        let mid = Math.floor(a.length / 2);
        let middleNumber = a[mid];
        if (middleNumber === numberToFind) return operations;
        else if (middleNumber > numberToFind) a = a.slice(0, mid);
        else a = a.slice(mid + 1);
        console.log(a);
    }
 }