import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SvgShip from '../svg/SvgShip';
import SvgEmpty from '../svg/SvgEmpty';
import SvgAim from '../svg/SvgAim';
import SvgBomb from '../svg/SvgBomb';
import SvgNone from '../svg/SvgNone';

import { changeContentFieldInStore } from '../../redux/actions/actionField';
import { incrementCountShipsMyFieldInStore, decrementCountShipsMyFieldInStore } from '../../redux/actions/actionBegin';
import styles from './Cell.module.scss';

const Cell = (props) => {

  const [stateButton, setStateButton] = useState(1);

  const dispatch = useDispatch()
  const countShips = useSelector((state) => state.begin.countShipsMyField);
  const conditionGame = useSelector((state) => state.condition.phase);
  const arrayEnemy = useSelector((state) => state.fields.enemyField)

  // TODO delete doubleclick

  const newStateButton = () => {
    (stateButton === 4) ? setStateButton(1) : setStateButton(stateButton + 1);
  }

  const onClickToCell = () => {

    if (props.type === 'myField' && conditionGame === 'begin') {
      if (props.content === 'empty' && countShips !== 5) {
        dispatch(incrementCountShipsMyFieldInStore());
        dispatch(changeContentFieldInStore('myField', props.id, 'ship'));
      }
      if (props.content === 'ship') {
        dispatch(decrementCountShipsMyFieldInStore());
        dispatch(changeContentFieldInStore('myField', props.id, 'empty'));
      }
    }

    if (props.type === 'enemyField' && conditionGame === 'battle') {
      switch (stateButton) {
        case 1: {
          arrayEnemy.forEach(element => {
            if (element.content === 'aim') { element.content = 'empty' }
          })
          dispatch(changeContentFieldInStore('enemyField', props.id, 'aim'));
          newStateButton();
          break;
        }
        case 2: {
          dispatch(changeContentFieldInStore('enemyField', props.id, 'none'));
          newStateButton();
          break;
        }
        case 3: {
          dispatch(changeContentFieldInStore('enemyField', props.id, 'bomb'));
          newStateButton();
          break;
        }
        case 4: {
          dispatch(changeContentFieldInStore('enemyField', props.id, 'empty'));
          newStateButton();
          break;
        }
      }
    }
  }

  return (
    <div className={styles.cell} onClick={onClickToCell}>
      {props.content === 'ship' && <SvgShip />}
      {props.content === 'empty' && <SvgEmpty />}
      {props.content === 'aim' && <SvgAim />}
      {props.content === 'none' && <SvgNone />}
      {props.content === 'bomb' && <SvgBomb />}
    </div>
  )
}

export default Cell;