//Uncommon Words
//Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.
//Ex: sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
//Ex: sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
//Ex: sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]

//Input: sentence1, sentence2
//Output: Array of unique words as strings
//Create a hash map for each sentence (can act as a count of words as well, as it doesn't matter how many times word shows up)
//Check hashmap1 for keys that don't exist in hashmap2
//Check hashmap2 for keys that don't exist in hashmap1
//If key doesn't exist, push into the results array

function uncommonWords(sentence1, sentence2){
  let map1 = new Map();
  let map2 = new Map();
  let words1 = sentence1.split(' ');
  let words2 = sentence2.split(' ');
  let result = [];

  for(let i = 0; i < words1.length; i++){
    let currentWord = words1[i];
    if(map1.has(currentWord)){
      let value = map1.get(currentWord);
      map1.set(currentWord, ++value);
    } else {
      map1.set(currentWord, 1);
    }
  }

  for(let j = 0; j < words2.length; j++){
    let currentWord = words2[j];
    if(map2.has(currentWord)){
      let value = map2.get(currentWord);
      map2.set(currentWord, ++value);
    } else {
      map2.set(currentWord, 1);
    }
  }

  map1.forEach((value, key) => {
    if(!map2.has(key)){
      result.push(key);
    }
  });

  for(let word of map2.keys()){
    if(!map1.has(word)){
      result.push(word);
    }
  }

  return result;
}

console.log(uncommonWords('the quick', 'brown fox'));
console.log(uncommonWords('the tortoise beat the haire', 'the tortoise lost to the haire'));
console.log(uncommonWords('copper coffee pot', 'hot coffee pot'));