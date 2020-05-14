import React from 'react';
import { Link } from 'react-router-dom';
import SvgBigShip from '../svg/SvgBigShip';
import styles from './PageHome.module.scss';
import Button from '../Button/Button';
import history from '../common/history';
import SvgText from '../svg/SvgText';
import SvgDraft from '../svg/SvgDraft';

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

      {/* <SvgDraft /> */}

      {/* <SvgZero /> */}

    </div>
  )
}

export default PageHome;