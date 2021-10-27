//String Permutations
//This question is asked by Amazon. Given a string s consisting of only letters and digits, where we are allowed to transform any letter to uppercase or lowercase, return a list containing all possible permutations of the string.
//Ex: Given the following string…
//S = "c7w2", return ["c7w2", "c7W2", "C7w2", "C7W2"]

function isNumber(char){
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const numSet = new Set(nums);
  
  if(numSet.has(char)){
    return true;
  } else {
    return false;
  }
}

function generatePermutations(str, index, permutationsList, current){
  if(index >= str.length){
    permutationsList.push(current);
    return;
  }
  let char = str.charAt(index);
  if(isNumber(char)){
    generatePermutations(str, index+1, permutationsList, current+char);
  } else {
    generatePermutations(str, index+1, permutationsList, current+char.toUpperCase());
    generatePermutations(str, index+1, permutationsList, current+char.toLowerCase());
  }
}

function stringPermutations(s){
  const permutations = [];
  generatePermutations(s, 0, permutations, '');
  return permutations;
}

console.log(stringPermutations('c7w2'));
