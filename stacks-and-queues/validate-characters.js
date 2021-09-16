//Validate Characters
//Given a string only containing the following characters (, ), {, }, [, and ] return whether or not the opening and closing characters are in a valid order.
//Ex- "(){}[]", return true
//Ex- "(({[]}))", return true
//Ex- "{(})", return false

//Pseudocode
//Create a small object/map of open/close corresponding brackets
//if its an opening bracket, push onto the stack
//if its a closing bracket, pop off the stack to ensure it corresponds to what is on top of the stack
//at the end, if there is anything still in the stack and you're at the end of the string - return false
//otherwise, return true

function validateCharacters(string){
  let bracketMatches = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  let stack = [];

  for(let i = 0; i < string.length; i++){
    if(string[i] === '{' || string[i] === '(' || string[i] === '['){
      stack.push(string[i]);
    } else {
      let last = stack.pop();
      if(bracketMatches[last] !== string[i]){
        return false;
      }
    }
  }
  
  if(stack.length > 0){
    return false;
  }

  return true;
}

console.log(validateCharacters('(){}[]'));
console.log(validateCharacters('(({[]}))'));
console.log(validateCharacters('{(})'));