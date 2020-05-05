import React from 'react';
import { usePicture } from './usePicture';
import SvgShip from '../svg/SvgShip';
import SvgEmpty from '../svg/SvgEmpty';
import SvgAim from '../svg/SvgAim';
import SvgBomb from '../svg/SvgBomb';
import SvgNone from '../svg/SvgNone';
import SvgDownShip from '../svg/SvgDownShip';
import styles from './Cell.module.scss';
import PropTypes from 'prop-types';

const Cell = (props) => {

  // TODO delete doubleclick

  const onClickToCell = usePicture(props);
  
  //TODO WTF? none and svgNone
  return (
    <div className={styles.cell} onClick={onClickToCell}>
      {props.content === 'ship' && <SvgShip />}
      {props.content === 'empty' && <SvgEmpty />}
      {props.content === 'aim' && <SvgAim />}
      {props.content === 'none' && <SvgNone />}
      {props.content === 'bomb' && <SvgBomb />}
      {props.content === 'kill' && <SvgDownShip />}
      {props.content === 'miss' && <SvgEmpty />}
    </div>
  )
}

Cell.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
}

export default Cell;