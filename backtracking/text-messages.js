//Generate Text Messages
//Given a string of digits, return all possible text messages those digits could send. Note: The mapping of digits to letters is as follows…
// 0 -> null
// 1 -> null
// 2 -> "abc"
// 3 -> "def"
// 4 -> "ghi"
// 5 -> "jkl"
// 6 -> "mno"
// 7 -> "pqrs"
// 8 -> "tuv"
// 9 -> "wxyz"

function generateCombinations(messagesList, digits, current, index, mapping){
  if(index === digits.length){
    messagesList.push(current);
    return;
  }

  const letters = mapping[parseInt(digits.charAt(index))];
  for(let i = 0; i < letters.length; i++){
    generateCombinations(messagesList, digits, current + letters.charAt(i), index + 1, mapping);
  }
}

function letterCombinations(digits){
  const messages = [];
  if(digits === null || digits.length === 0){
    return messages;
  }

  const lettersMapping = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  generateCombinations(messages, digits, '', 0, lettersMapping);
  return messages;
}

//Alternative solution all in one function with nested backtracking function
function messageCombinations(digits){
  const result = [];
  const digitsToChar = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const backtrack = (i, currentStr) => {
    if(currentStr.length === digits.length){
      result.push(currentStr);
      return;
    }

    const currentDigit = digits[i];
    const letters = digitsToChar[currentDigit];

    for(let char of letters){
      backtrack(i+1, currentStr + char);
    }
  };

  if(digits.length > 0){
    backtrack(0, '');
  }

  return result;
}

console.log(letterCombinations('23'));
console.log(messageCombinations('23'));