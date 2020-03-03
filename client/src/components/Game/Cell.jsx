import React from 'react';
import SvgShip from '../svg/SvgShip4'
import styles from './Cell.module.scss';

const Cell = (props) => {
  return (
    <div className={styles.cell}>
      {/* {props.id} */}
      <SvgShip />
    </div>
  )
}

export default Cell;