//Valid Palindrome with Removal
//Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
//Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

function validPalindrome(string){
  const isPalindrome = (str, i, j) => {
    while(i < j){
      if(str.charAt(i) !== str.charAt(j)){
        return false;
      }
      i++;
      j--;
    }
    return true;
  };

  let left = 0;
  let right = string.length - 1;
  while(left < right){
    if(string.charAt(left) !== string.charAt(right)){
      let result = isPalindrome(string, left+1, right) || isPalindrome(string, left, right-1);
      return result;
    }
    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome('abcba'));
console.log(validPalindrome('foobof'));
console.log(validPalindrome('abccab'));