function countKill(arrayIn, what) {
  const count = arrayIn.reduce((sum, element) => {
    if (element.content === what) return sum += 1;
    return sum;
  },0)
  return (count === 5) ? true : false; 
}

module.exports = countKill;