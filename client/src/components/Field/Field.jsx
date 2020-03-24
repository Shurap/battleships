import React from 'react';
import { connect } from 'react-redux';
import Cell from '../Cell/Cell';
import SvgField from '../svg/SvgField'
import styles from './Field.module.scss';

const Field = (props) => {

  const cells = props.array.map((element) => {
    return (
      <div
        className={styles.wrapperCell}
        key={element.id}
      >
        <Cell
          id={element.id}
          content={element.content}
          type={props.type}
        />
      </div>
    )
  });

  return (
    <div className={styles.field}>
      <div className={styles.wrapperLine}>
        <div className={styles.line}>{cells.slice(0, 10)}</div>
        <div className={styles.line}>{cells.slice(10, 20)}</div>
        <div className={styles.line}>{cells.slice(20, 30)}</div>
        <div className={styles.line}>{cells.slice(30, 40)}</div>
        <div className={styles.line}>{cells.slice(40, 50)}</div>
        <div className={styles.line}>{cells.slice(50, 60)}</div>
        <div className={styles.line}>{cells.slice(60, 70)}</div>
        <div className={styles.line}>{cells.slice(70, 80)}</div>
        <div className={styles.line}>{cells.slice(80, 90)}</div>
        <div className={styles.line}>{cells.slice(90, 100)}</div>
      </div>

      <SvgField />

    </div>
  )
}

export default Field;