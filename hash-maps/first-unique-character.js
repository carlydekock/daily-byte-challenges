//First Unique Character
//Given a string, return the index of its first unique character. If a unique character does not exist, return -1.
//Ex: "abcabd", return 2
//Ex: "thedailybyte", return 1
//Ex: "developer", return 0

function firstUnique(string){
  let count = {};
  for(let i = 0; i < string.length; i++){
    let currentLetter = string.charAt(i);
    count[currentLetter] ? count[currentLetter]++ : count[currentLetter] = 1;
  }

  for(let key in count){
    if(count[key] === 1){
      return string.indexOf(key);
    }
  }

  return -1;
}

console.log(firstUnique('abcabd'));
console.log(firstUnique('thedailybyte'));
console.log(firstUnique('developer'));
console.log(firstUnique('abcdabcd'));
