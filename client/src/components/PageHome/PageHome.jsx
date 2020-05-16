import React from 'react';
import { Link } from 'react-router-dom';
import SvgBigShip from '../svg/SvgBigShip';
import styles from './PageHome.module.scss';
import Button from '../Button/Button';
import history from '../common/history';
import SvgText from '../svg/SvgText';
import SvgDownShip from '../svg/SvgDownShip';

import { SvgZero, SvgOne, SvgTwo, SvgThree, SvgFour, SvgFive } from '../svg/SvgLetters';

//TODO Have to delete SvgLetters.jsx

const PageHome = () => {

  const onClickButton = () => {
    history.push('/login')
  }

  return (
    <div className={styles.pageHome}>

      <div className={styles.wrapperText}>
        Battle Sea
      </div>

      <SvgBigShip />

      <SvgText />

      <div className={styles.wrapperSvg}>
        <Button
          state={true}
          name={'Start'}
          click={onClickButton}
        />
      </div>

      {/* <SvgDownShip /> */}

      {/* <SvgZero /> */}

    </div>
  )
}

export default PageHome;