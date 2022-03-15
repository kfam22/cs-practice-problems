/* instructions
Given a word and an array of string skeletons, return an array of all of the skeletons that could be turned into the word by replacing the '-' with letters. If there are no possible matches return an empty string example: given the word 'hello' 'he---' would 
be a match, 'h--l' or 'g-llo' would not be a match */

// example test case:
let word = 'hello';
let skeletons = ['h--l', 'he---', 'g-llo', 'm-llo', '--llo', 'h-l--', 'hell-', 'h---a'];

// take 1
function findSkels(word, skeletons){
let goodSkels = [];
skeletons = skeletons.filter(w => w.length === word.length);
console.log(skeletons)
  for(let sw = 0; sw < skeletons.length; sw++){
    // outer loop loops through each word in skeletons array
    let possibleMatch = true;
    for(let letter = 0; letter < word.length; letter++){
      // because we now know that all strings are the same length, we can now loop through both word and skeleton word at the same time. this inner loop loops through each letter of the 
      if(word[letter] !== skeletons[sw][letter] && skeletons[sw][letter] !== '-'){
        possibleMatch = false
      }
    }
    if(possibleMatch){
      goodSkels.push(skeletons[sw])
    }
  } 
    return goodSkels;
}

//take 2
const findSkels = (word, skeletons) => skeletons
  .filter(skel => (
    skel.length === word.length &&
    [...skel].every((char, i) => char === '-' || char === word[i])
  ));
console.log(findSkels(word, skeletons));

console.log(findSkels(word, skeletons))



