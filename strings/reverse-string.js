//Day 1: Reverse a String
//Given a string, reverse all of its characters and return the resulting string.
//Ex: Given the following strings...
//“Cat”, return “taC”
//“The Daily Byte”, return "etyB yliaD ehT”
//“civic”, return “civic”

function reverseString(string){
  let split = string.split('');
  return split.reverse().join('');
}

// function reverseString(string){
//   let split = string.split('');
//   let newString = '';
//   for(let i = split.length -1; i >= 0; i--){
//     newString += split[i];
//   }
//   return newString;
// }

// function reverseString(string){
//   if(string === ''){
//     return '';
//   } else {
//     return reverseString(string.substr(1)) + string.charAt(0);
//   }
// }

console.log(reverseString('Cat'));
console.log(reverseString('The Daily Byte'));
console.log(reverseString('civic'));
