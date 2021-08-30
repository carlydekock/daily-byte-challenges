//Correct Capitalization
//Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.
//Ex: "USA", return true
//EX: "compUter", return false
//Ex: "coding", return true

function checkCapitalization(string){
  let count = 0;
  for(let i = 0; i < string.length; i++){
    let letterCode = string.charCodeAt(i);
    if(letterCode < 97){
      count++;
    }
  }
  if(count === 0 || count === string.length || count === 1 && string.charCodeAt(0) < 97){
    return true;
  }

  return false;
}

console.log(checkCapitalization('coding'));
console.log(checkCapitalization('USA'));
console.log(checkCapitalization('compUter'));