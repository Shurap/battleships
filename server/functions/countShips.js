function countShips(cellId, arrayIn) {

  const coordX = cellId.substr(0, 1);
  const coordY = cellId.substr(1, 1);

  const arrayOut = arrayIn.reduce((prev, cur, i, a) => {
    return !(i % 10) ? prev.concat([a.slice(i, i + 10)]) : prev
  }, []);

  // console.log('array', arrayOut[0][9])

}

module.exports = countShips;