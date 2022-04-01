// We distribute some number of candies, to a row of n = num_people people in the following way:

// We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

// Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

// This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

// Return an array (of length num_people and sum candies) that represents the final distribution of candies.

var distributeCandies = function(candies, num_people) {
    
    let candyCount = candies;
    let n = 1;
    let idx = 0;
    const answer = Array(num_people).fill(0);
    
    while(candyCount > 0){
        if(candyCount < n){
          answer[idx % num_people] += candyCount;   
        } else{
           answer[idx % num_people] += n; 
        }
       
        idx += 1
        candyCount -= n;
        n += 1;
    }
    return answer
};

// create a list to return at the end - make a list full of 0s lf length num People
// iterate trhough the list of people (while we have candies?)
// how to allocate the candies
// wrap around my list
// if we are going to run out of candy, git the remaining candy to the next person
// terminate the loop
// return the list