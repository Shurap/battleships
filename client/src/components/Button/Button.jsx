import React from 'react';
import { useState } from 'react';
import SvgButtonUp from '../svg/SvgButtonUp';
import SvgButtonDown from '../svg/SvgButtonDown';
import { sleep } from '../common/sleep';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  const [statePress, setStatePress] = useState(false);

  const onClick = async () => {
    setStatePress(true);
    await sleep(100);
    setStatePress(false);
    await sleep(100);
    props.click();
  }

  const activeButton = (
    <div className={styles.button} onClick={onClick}>
      <div className={(statePress) ? styles.wrapperTextDown : styles.wrapperTextUp}>
        {props.name}
      </div>
      {(statePress) ? <SvgButtonDown /> : <SvgButtonUp />}
    </div>
  )

  const passiveButton = (
    <div className={styles.button}>
      <div className={styles.wrapperTextUp} style={{ color: '#858585' }}>
        {props.name}
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

Button.propTypes = {
  name: PropTypes.string,
  state: PropTypes.bool,
  click: PropTypes.func,
}

export default Button;