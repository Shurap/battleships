import React from 'react';
import { usePicture } from './usePicture';
import SvgShip from '../svg/SvgShip';
import SvgEmpty from '../svg/SvgEmpty';
import SvgAim from '../svg/SvgAim';
import SvgBomb from '../svg/SvgBomb';
import SvgNone from '../svg/SvgNone';
import styles from './Cell.module.scss';

const Cell = (props) => {

  // TODO delete doubleclick

  const onClickToCell = usePicture(props);
  
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