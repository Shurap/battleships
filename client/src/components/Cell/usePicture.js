import { useSelector, useDispatch } from 'react-redux';
import { changeContentFieldInStore } from '../../redux/actions/actionField';
import { incrementCountShipsMyFieldInStore, decrementCountShipsMyFieldInStore } from '../../redux/actions/actionBegin';

export const usePicture = (props) => {

  const dispatch = useDispatch()
  const countShips = useSelector((state) => state.begin.countShipsMyField);
  const conditionGame = useSelector((state) => state.condition.phase);
  const arrayEnemy = useSelector((state) => state.fields.enemyField);

  const onCellClick = () => {

    if (props.type === 'myField' && conditionGame === 'begin') {
      if (props.content === 'empty' && countShips !== 5) {
        dispatch(incrementCountShipsMyFieldInStore());
        dispatch(changeContentFieldInStore('myField', props.id, 'ship', ''));
      }
      if (props.content === 'ship') {
        dispatch(decrementCountShipsMyFieldInStore());
        dispatch(changeContentFieldInStore('myField', props.id, 'empty', ''));
      }
    }

    if (props.type === 'enemyField' && conditionGame === 'battle') {
      switch (props.content) {
        case 'empty': {
          arrayEnemy.forEach(element => {
            if (element.content === 'aim') {
              element.content = 'empty';
            }
          })
          dispatch(changeContentFieldInStore('enemyField', props.id, 'aim', ''));
          break;
        }
        case 'aim': {
          dispatch(changeContentFieldInStore('enemyField', props.id, 'none', ''));
          break;
        }
        case 'none': {
          dispatch(changeContentFieldInStore('enemyField', props.id, 'bomb', ''));
          break;
        }
        case 'bomb': {
          dispatch(changeContentFieldInStore('enemyField', props.id, 'empty', ''));
          break;
        }
      }
    }
  }

return onCellClick;

}