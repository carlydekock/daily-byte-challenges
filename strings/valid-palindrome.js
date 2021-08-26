//Valid Palindrome
//Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
//Note: a palindrome is a sequence of characters that reads the same forwards and backwards.


//couldn't remember the Regex to replace, so manually checked for special characters - space, comma, period, and colon
// function validPalindrome(string){
//   string = string.toLowerCase();
//   let split = string.split('');

//   let left = 0;
//   let right = split.length - 1;

//   while(left < right){
//     if(split[left] === split[right]){
//       left++;
//       right--;
//     } else if(split[left] === ' ' || split[left] === ',' || split[left] === '.' || split[left] === ':'){
//       left++;
//     } else if(split[right] === ' ' || split[right] === ',' || split[right] === '.' || split[right] === ':'){
//       right--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

function validPalindrome(string){
  let newString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = newString.length - 1;

  while(left < right){
    if(newString.charAt(left) === newString.charAt(right)){
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(validPalindrome('level'));
console.log(validPalindrome('algorithm'));
console.log(validPalindrome('A man, a plan, a canal: Panama.'));