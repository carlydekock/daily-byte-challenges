//Remove Adjacent Duplicates
//Given a string s containing only lowercase letters, continuously remove adjacent characters that are the same and return the result.
//Ex- s = "abccba", return ""
//Ex- s = "foobar", return "fbar"
//Ex- s = "abccbefggfe", return "a"

function removeAdjDuplicates(s){
  let stack = [s[0]]; //initialize with first letter

  for(let i = 1; i < s.length; i++){
    let currentLetter = s[i];
    let last;
    if(stack.length > 0){
      last = stack[stack.length -1];
    }
    if(currentLetter === last){
      stack.pop();
    } else {
      stack.push(currentLetter);
    }
  }
  return stack.join('');
}

console.log(removeAdjDuplicates('abccba'));
console.log(removeAdjDuplicates('foobar'));
console.log(removeAdjDuplicates('abccbefggfe'));