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
import { SvgZero, SvgOne, SvgTwo, SvgThree, SvgFour, SvgFive } from '../svg/SvgLetters';

const Cell = (props) => {

  // TODO delete doubleclick

  const onClickToCell = usePicture(props);

  return (
    <div className={styles.cell} onClick={onClickToCell}>
      {props.content === 'ship' && <SvgShip />}
      {props.content === 'empty' && <SvgEmpty />}
      {props.content === 'aim' && <SvgAim />}
      {props.content === 'none' && <SvgNone />}
      {props.content === 'bomb' && <SvgBomb />}
      {props.content === 'kill' && <SvgDownShip />}
      {props.content === 'miss' && <SvgEmpty />}

      {props.count === 0 && <SvgZero />}
      {props.count === 1 && <SvgOne />}
      {props.count === 2 && <SvgTwo />}
      {props.count === 3 && <SvgThree />}
      {props.count === 4 && <SvgFour />}
      {props.count === 5 && <SvgFive />}

      {/* <SvgDownShip />
      <SvgFour /> */}
      {/* <SvgBomb /> */}

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