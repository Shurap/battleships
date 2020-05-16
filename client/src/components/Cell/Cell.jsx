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
import { SHIP, EMPTY, AIM, NONE, BOMB, KILL, MISS } from '../../constants';

const Cell = (props) => {

  // TODO delete doubleclick

  const onClickToCell = usePicture(props);

  //TODO WTF? none and svgNone
  return (
    <div className={styles.cell} onClick={onClickToCell}>
      {props.content === SHIP && <SvgShip />}
      {props.content === EMPTY && <SvgEmpty />}
      {props.content === AIM && <SvgAim />}
      {props.content === NONE && <SvgNone />}
      {props.content === BOMB && <SvgBomb />}
      {props.content === KILL && <SvgDownShip />}
      {props.content === MISS && <SvgEmpty />}
    </div>
  )
}

Cell.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
}

export default Cell;