import React from 'react';
import styles from './SvgEmpty.module.scss';

const SvgEmpty = () => {
  return (
    <svg className={styles.svg} x="0px" y="0px" viewBox="0 0 1000 1000" >
      <path className={styles.path} strokeWidth="1"
      />
      {/* <text x="100" y="800" fill="#ED6E46" font-size="1500">5</text> */}
    </svg>
  )
}

export default SvgEmpty;