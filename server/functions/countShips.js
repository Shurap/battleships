const { SHIP, KILL} = require('../constants');

function countShips(cellId, arrayIn) {

  const coordX = cellId.substr(0, 1);
  const coordY = cellId.substr(1, 1);

  const arrayOut = arrayIn.reduce((prev, cur, i, a) => {
    return !(i % 10) ? prev.concat([a.slice(i, i + 10)]) : prev
  }, []);

  let count = 0;
  //vertical
  for (let i = 0; i < 10; i++) {
    if ((i !== +coordX) && ((arrayOut[i][coordY].content === SHIP) || (arrayOut[i][coordY].content === KILL))) count++;
  }
  //horizontal
  for (let i = 0; i < 10; i++) {
    if ((i !== +coordY) && ((arrayOut[coordX][i].content === SHIP) || (arrayOut[coordX][i].content === KILL))) count++;
  }
  //diagonals
  let i = coordX;
  let j = coordY;
  while ((i < 9) && (j < 9)) {
    i++;
    j++;
    if ((arrayOut[i][j].content === SHIP) || (arrayOut[i][j].content === KILL)) count++;
  }
  i = coordX;
  j = coordY;
  while ((i > 0) && (j > 0)) {
    i--;
    j--;
    if ((arrayOut[i][j].content === SHIP) || (arrayOut[i][j].content === KILL)) count++;
  }
  i = coordX;
  j = coordY;
  while ((i < 9) && (j > 0)) {
    i++;
    j--;
    if ((arrayOut[i][j].content === SHIP) || (arrayOut[i][j].content === KILL)) count++;
  }
  i = coordX;
  j = coordY;
  while ((i > 0) && (j < 9)) {
    i--;
    j++;
    if ((arrayOut[i][j].content === SHIP) || (arrayOut[i][j].content === KILL)) count++;
  }
  return count;
}

module.exports = countShips;