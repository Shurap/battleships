import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SvgShip from '../../svg/SvgShip';
import SvgEmpty from '../../svg/SvgEmpty';
import { changeContentFieldInStore } from '../../../redux/actions/actionField';
import { incrementCountShipsMyFieldInStore, decrementCountShipsMyFieldInStore } from '../../../redux/actions/actionBegin';
import styles from './Cell.module.scss';

const Cell = (props) => {

  const dispatch = useDispatch()
  const countShips = useSelector((state) => state.begin.countShipsMyField);

  const onClickToCell = () => {
    if (props.content === 'empty' && countShips !== 5) {
      dispatch(incrementCountShipsMyFieldInStore());
      dispatch(changeContentFieldInStore('myField', props.id, 'ship'));
    }
    if (props.content === 'ship') {
      dispatch(decrementCountShipsMyFieldInStore());
      dispatch(changeContentFieldInStore('myField', props.id, 'empty'));
    }
  }

  return (
    <div className={styles.cell} onClick={onClickToCell}>
      {props.content === 'ship' && <SvgShip />}
      {props.content === 'empty' && <SvgEmpty />}
    </div>
  )
}

export default Cell;