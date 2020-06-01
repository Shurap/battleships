import React from 'react';
import styles from './SvgEmpty.module.scss';

const SvgEmpty = () => {
  return (
    <svg className={styles.svg} viewBox="0 0 1000 1000" >
      <path className={styles.path}/>
    </svg>
  )
}

export default SvgEmpty;