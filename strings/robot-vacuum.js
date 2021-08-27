// Robot Vacuum
//Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.
//Ex: "LR", return true
//Ex: "URURD", return false
//Ex: "RUULLDRD", return true

function robotVacuum(string){
  let moves = {};
  let moveDirections = string.split('');
  for(let i = 0; i < moveDirections.length; i++){
    let currentMove = moveDirections[i];
    moves[currentMove] = (moves[currentMove] || 0) + 1;
  }
  if(moves['L'] === moves['R'] && moves['U'] === moves['D']){
    return true;
  }
  return false;
}

console.log(robotVacuum('LR'));
console.log(robotVacuum('URURD'));
console.log(robotVacuum('RUULLDRD'));