import React from 'react';
import { Link } from 'react-router-dom';
import SvgBigShip from '../svg/SvgBigShip';
import styles from './PageHome.module.scss';
import Button from '../Button/Button';
import history from '../common/history';

//TODO Have to delete SvgLetters.jsx
// import SvgLetters from '../svg/SvgLetters'

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
      {/* <div className={styles.empty}></div> */}

      <div className={styles.wrapperSvg}>
        <Button
          state={true}
          name={'Start'}
          click={onClickButton}
        />
      </div>
      {/* <SvgLetters /> */}
    </div>
  )
}

export default PageHome;