import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SvgButtonUp from '../svg/SvgButtonUp';
import SvgButtonDown from '../svg/SvgButtonDown';
import { sleep } from '../common/sleep';
import styles from './Button.module.scss';

const Button = (props) => {

  const [statePress, setStatePress] = useState(false);

  const turn = useSelector((state) => state.condition.turn)

  const onClick = async () => {
    setStatePress(true);
    await sleep(100);
    setStatePress(false);
    await sleep(100);
    props.click();
  }

  const activeButton = (
    <div className={styles.button} onClick={onClick}>
      <div className={styles.wrapperText}>
        Start
      </div>
      {(statePress) ? <SvgButtonDown /> : <SvgButtonUp />}
    </div>
  )

  const passiveButton = (
    <div className={styles.button}>
      <div className={styles.wrapperText} style={{ color: '#858585' }}>
        Start
      </div>
      <SvgButtonUp color={'#858585'} />
    </div>
  )

  return (
    <div>
      {(props.state) ? activeButton : passiveButton}
    </div>
  )
}
export default Button;