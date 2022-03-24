// You have an array p of points on a Cartesian plane. Find and return the minimum possible Euclidian distance between two points with different indices in p.

function solution(p) {
    let smallestDist = Infinity;
    
    for(let i = 0; i < p.length; i++){
        for(let j = i + 1; j < p.length; j++){
            if (Edist(p[i], p[j]) < smallestDist){
                smallestDist = Edist(p[i], p[j]);
            } 
        }
    }
    return smallestDist;
}

function Edist(arr1, arr2) {
    return Math.sqrt(Math.pow((arr1[0] - arr2[0]), 2) + Math.pow((arr1[1] - arr2[1]), 2))
}

// euclidian distance formula: dist((x, y), (a, b)) = √(x - a)² + (y - b)²
