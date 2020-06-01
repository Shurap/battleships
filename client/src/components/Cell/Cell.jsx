import React from 'react';
import { usePicture } from './usePicture';
import SvgShip from '../svg/SvgShip';
import SvgEmpty from '../svg/SvgEmpty';
import SvgAim from '../svg/SvgAim';
import SvgBomb from '../svg/SvgBomb';
import SvgNone from '../svg/SvgNone';
import SvgSplash from '../svg/SvgSplash';
import SvgDownShip from '../svg/SvgDownShip';
import styles from './Cell.module.scss';
import PropTypes from 'prop-types';
import { SvgZero, SvgOne, SvgTwo, SvgThree, SvgFour, SvgFive } from '../svg/SvgLetters';
import { SHIP, EMPTY, AIM, NONE, BOMB, KILL, MISS } from '../../constants';

const Cell = (props) => {

  // TODO delete doubleclick

  const onClickToCell = usePicture(props);

  return (
    <div className={styles.cell} onClick={onClickToCell}>
      {props.content === SHIP && <SvgShip />}
      {props.content === EMPTY && <SvgEmpty />}
      {props.content === AIM && <SvgAim />}
      {props.content === NONE && <SvgNone />}
      {props.content === BOMB && <SvgBomb />}
      {props.content === KILL && <SvgDownShip />}
      {props.content === MISS && <SvgSplash />}

      {props.count === 0 && <SvgZero />}
      {props.count === 1 && <SvgOne />}
      {props.count === 2 && <SvgTwo />}
      {props.count === 3 && <SvgThree />}
      {props.count === 4 && <SvgFour />}
      {props.count === 5 && <SvgFive />}
    </div>
  )
}

Cell.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  count: PropTypes.number,
}

export default Cell;