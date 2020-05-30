import { SHIP } from '../constants'

export const getFinishedArray = (state, array) => {
  const finishedArray = [...state.fields.enemyField];
  const receivedArray = array;

  receivedArray.forEach((element, index) => {
    if (element.content === SHIP) finishedArray[index].content = SHIP
  });

  return finishedArray;
}