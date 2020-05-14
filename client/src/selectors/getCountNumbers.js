export const getCountNumbers = (state) => {
  const result = state.fields.enemyField.reduce((summ, element) => {
    // console.log('element', element.count)
    console.log('summ', summ)
    if (element.count != '') return summ + 1;
    return summ;
  }, 0)
  console.log('result', result)
  return result
}