import React from 'react';
import styles from './SvgShip.module.scss';

const SvgEmpty = (props) => {
  return (
    <svg className={styles.svg} x="0px" y="0px" viewBox="0 0 1000 1000" >
      <path className={styles.path} strokeWidth="1"
      />
    </svg>
  )
}

export default SvgEmpty;