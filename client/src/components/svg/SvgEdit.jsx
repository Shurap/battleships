import React from 'react';
import styles from './SvgField.module.scss';

const SvgEdit = (props) => {
  return (
    <svg className={styles.svg} x="0px" y="0px" viewBox="0 0 510 110" >
      <path className={styles.path} strokeWidth="3"
        d="M5 5, h 500 v 100 h -500 z" 
      />
    </svg>
  )
}

export default SvgEdit;