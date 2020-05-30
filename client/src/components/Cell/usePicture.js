import { useSelector, useDispatch } from 'react-redux';
import { changeContentFieldInStore } from '../../redux/actions/actionField';
import { incrementCountShipsMyFieldInStore, decrementCountShipsMyFieldInStore } from '../../redux/actions/actionBegin';
import { SHIP, EMPTY, AIM, NONE, BOMB, MYFIELD, ENEMYFIELD, BATTLE, BEGIN } from '../../constants';

//TODO subscribe to props
export const usePicture = (props) => {

  const dispatch = useDispatch()
  const countShips = useSelector((state) => state.begin.countShipsMyField);
  const conditionGame = useSelector((state) => state.condition.phase);
  const arrayEnemy = useSelector((state) => state.fields.enemyField);

  const onCellClick = () => {

    if (props.type === MYFIELD && conditionGame === BEGIN) {
      if (props.content === EMPTY && countShips !== 5) {
        dispatch(incrementCountShipsMyFieldInStore());
        dispatch(changeContentFieldInStore(MYFIELD, props.id, SHIP, null));
      }
      if (props.content === SHIP) {
        dispatch(decrementCountShipsMyFieldInStore());
        dispatch(changeContentFieldInStore(MYFIELD, props.id, EMPTY, null));
      }
    }

    if (props.type === ENEMYFIELD && conditionGame === BATTLE && props.count === null) {
      switch (props.content) {
        case EMPTY: {
          arrayEnemy.forEach(element => {
            if (element.content === AIM) {
              element.content = EMPTY;
            }
          })
          dispatch(changeContentFieldInStore(ENEMYFIELD, props.id, AIM, null));
          break;
        }
        case AIM: {
          dispatch(changeContentFieldInStore(ENEMYFIELD, props.id, NONE, null));
          break;
        }
        case NONE: {
          dispatch(changeContentFieldInStore(ENEMYFIELD, props.id, BOMB, null));
          break;
        }
        case BOMB: {
          dispatch(changeContentFieldInStore(ENEMYFIELD, props.id, EMPTY, null));
          break;
        }
      }
    }
  }

return onCellClick;

}