//Longest Common Prefix
//Given an array of strings, return the longest common prefix that is shared amongst all strings.
//Note: you may assume all strings only contain lowercase alphabetical characters.
//Ex: ["colorado", "color", "cold"], return "col"
//Ex: ["a", "b", "c"], return ""
//Ex: ["spot", "spotty", "spotted"], return "spot"

function longestPrefix(stringsArr){
  let prefix = '';
  if(stringsArr.length === 0 || !stringsArr){
    return prefix;
  }

  for(let i = 0; i < stringsArr[0].length; i++){
    const currentCharacter = stringsArr[0][i];

    for(let j = 1; j < stringsArr.length; j++){
      if(stringsArr[j][i] !== currentCharacter){
        return prefix;
      }
    }
    prefix = prefix + currentCharacter;
  }
  return prefix;
}

console.log(longestPrefix(['colorado', 'color', 'cold']));
console.log(longestPrefix(['a', 'b', 'c']));
console.log(longestPrefix(['spot', 'spotty', 'spotted']));

