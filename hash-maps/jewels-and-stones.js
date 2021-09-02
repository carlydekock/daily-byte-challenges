//Jewels and Stones
//Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.
//Ex- jewels = "abc", stones = "ac", return 2
//Ex- jewels = "Af", stones = "AaaddfFf", return 3
//Ex- jewels = "AYOPD", stones = "ayopd", return 0

function jewelsAndStones(strJ, strS){
  let jewels = new Map();
  let count = 0;
  for(let i = 0; i < strJ.length; i++){
    let currentLetter = strJ.charAt(i);
    if(!jewels.has(currentLetter)){
      jewels.set(currentLetter, i);
    } 
  }
  for(let j = 0; j < strS.length; j++){
    let currentStone = strS.charAt(j);
    if(jewels.has(currentStone)){
      count++;
    }
  }
  return count;
}

console.log(jewelsAndStones('abc', 'ac'));
console.log(jewelsAndStones('Af', 'AaaddfFf'));
console.log(jewelsAndStones('AYOPD', 'ayopd'));