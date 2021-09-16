//Compare Keystrokes
//Given two strings s and t, which represents a sequence of keystrokes, where # denotes a backspace, return whether or not the sequences produce the same result.
//Ex- s = "ABC#", t = "CD##AB", return true
//Ex- s = "como#pur#ter", t = "computer", return true
//Ex- s = "cof#dim#ng", t = "code", return false

//Pseudocode
//Initialize a stack for each s and t
//Iterating through the strings, if it's a #, pop off the stack and keep going
//If it's a letter, add to the stack
//At the end, compare the letters in each stack - if any are different return false, else return true

function compareKeystrokes(s, t){
  let stackS = [];
  let stackT = [];

  for(let i = 0; i < s.length; i++){
    let currentChar = s[i];
    if(currentChar === '#'){
      stackS.pop();
    } else {
      stackS.push(currentChar);
    }
  }

  for(let j = 0; j < t.length; j++){
    let currentChar = t[j];
    if(currentChar === '#'){
      stackT.pop();
    } else {
      stackT.push(currentChar);
    }
  }

  while(stackS.length > 0 && stackT.length > 0){
    let letterS = stackS.pop();
    let letterT = stackT.pop();

    if(letterS !== letterT){
      return false;
    }
  }
  return true;
}


console.log(compareKeystrokes('ABC#', 'CD##AB'));
console.log(compareKeystrokes('como#pur#ter', 'computer'));
console.log(compareKeystrokes('cof#dim#ng', 'code'));