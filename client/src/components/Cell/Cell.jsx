import React from 'react';
import styles from './Cell.module.scss';

const Cell = (props) => {
  return (
    <div className={styles.cell}>
      {props.id}
      {props.content}
    </div>
  )
}

export default Cell;