function countShips(cellId, arrayIn) {

  const coordX = cellId.substr(0, 1);
  const coordY = cellId.substr(1, 1);

  const arrayOut = arrayIn.reduce((prev, cur, i, a) => {
    return !(i % 10) ? prev.concat([a.slice(i, i + 10)]) : prev
  }, []);

  //-------------------------------------------------
  let count = 0;
//vertical
  for (let i = 0; i < 10; i++) {
    if (i !== +coordX) {
      if ((arrayOut[i][coordY].content === 'ship') || (arrayOut[i][coordY].content === 'wreck')) count++;
    }
  }
//horizontal
  for (let i = 0; i < 10; i++) {
    if (i !== +coordY) {
      if ((arrayOut[coordX][i].content === 'ship') || (arrayOut[coordX][i].content === 'wreck')) count++;
    }
  }
  let i = coordX;
  let j = coordY;
  while ((i < 9) && (j < 9)) {
    i++;
    j++;
    if ((arrayOut[i][j].content === 'ship') || (arrayOut[i][j].content === 'wreck')) count++;
  }
  i = coordX;
  j = coordY;
  while ((i > 0) && (j > 0)) {
    i--;
    j--;
    if ((arrayOut[i][j].content === 'ship') || (arrayOut[i][j].content === 'wreck')) count++;
  }
  i = coordX;
  j = coordY;
  while ((i < 9) && (j > 0)) {
    i++;
    j--;
    if ((arrayOut[i][j].content === 'ship') || (arrayOut[i][j].content === 'wreck')) count++;
  }
  i = coordX;
  j = coordY;
  while ((i > 0) && (j < 9)) {
    i--;
    j++;
    if ((arrayOut[i][j].content === 'ship') || (arrayOut[i][j].content === 'wreck')) count++;
  }
  return count;
  //----------------------------------------------
}

module.exports = countShips;