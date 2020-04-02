import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SvgButtonUp from '../svg/SvgButtonUp';
import SvgButtonDown from '../svg/SvgButtonDown';
import { sleep } from '../common/sleep';
import style from './Button.module.scss';

const Button = () => {

  const [statePress, setStatePress] = useState(false);

  const turn = useSelector((state) => state.condition.turn)

  const onClick = async () => {
    setStatePress(true);
    await sleep(100);
    setStatePress(false);
    await sleep(100);
    // props.click();
  }

  const activeButton = (
    <div className={style.button} onClick={onClick}>
      {(statePress) ? <SvgButtonDown /> : <SvgButtonUp />}
    </div>
  )

  const passiveButton = (
    <div className={style.button}>
      <SvgButtonUp color={'#858585'} />
    </div>
  )

  return (
    <div>
      {(turn === 'turn') && activeButton}
      {(turn === 'wait') && passiveButton}
    </div>
  )
}
export default Button;