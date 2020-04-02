import React from 'react';
import { useState } from 'react';
import SvgButtonUp from '../svg/SvgButtonUp';
import SvgButtonDown from '../svg/SvgButtonDown';
import { sleep } from '../common/sleep';
import styles from './ButtonSubmit.module.scss';

const ButtonSubmit = (props) => {

  const [statePress, setStatePress] = useState(false);

  const onClick = async () => {
    setStatePress(true);
    await sleep(100);
    setStatePress(false);
    await sleep(100);
    props.click();
  }

  return (
    <div className={styles.button} onClick={onClick}>
      <div className={styles.wrapperText}>
        Start
      </div>
      {(statePress) ? <SvgButtonDown /> : <SvgButtonUp />}
    </div>
  )
}
export default ButtonSubmit;