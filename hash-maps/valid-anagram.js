//Valid Anagram
//Given two strings s and t return whether or not s is an anagram of t.
//Note: An anagram is a word formed by reordering the letters of another word.
//Ex: s = "cat", t = "tac", return true
//Ex: s = "listen", t = "silent", return true
//Ex: s = "program", t = "function", return false

function validAnagram(s, t){
  let sLetters = {};
  let tLetters = {};
  if(s.length !== t.length){
    return false;
  }

  for(let i = 0; i < s.length; i++){
    let currentLetter = s.charAt(i);
    sLetters[currentLetter] ? sLetters[currentLetter]++ : sLetters[currentLetter] = 1;
  }

  for(let j = 0; j < t.length; j++){
    let currentLetter = t.charAt(j);
    tLetters[currentLetter] ? tLetters[currentLetter]++ : tLetters[currentLetter] = 1;
  }

  for(let key in sLetters){
    if(sLetters[key] !== tLetters[key]){
      return false;
    }
  }
  return true;
}

console.log(validAnagram('cat', 'tac'));
console.log(validAnagram('listen', 'silent'));
console.log(validAnagram('program', 'function'));