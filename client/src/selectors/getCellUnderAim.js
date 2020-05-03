export const getCellUnderAim = (state) => {
  const array = state.fields.enemyField;
  const underAim = (element) => {
    return element.content === 'aim';
  } 
  return array.find(underAim);
//TODO why i cant use .id?
}