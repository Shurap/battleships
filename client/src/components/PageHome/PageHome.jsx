import React from 'react';
import SvgBigShip from '../svg/SvgBigShip';
import Button from '../Button/Button';
import history from '../common/history';
import styles from './PageHome.module.scss';

const PageHome = (props) => {

  const onClickButton = () => {
    history.push('/login')
  }

  return (
    <div className={styles.pageHome}>
      <div className={styles.content}>
        <div className={styles.one}>
          Battle Sea
        </div>
        <div className={styles.two}>
          <SvgBigShip />
        </div>
        <div className={styles.separate}></div>
        <div className={styles.three}>
          <Button
            state={true}
            name={'Start'}
            click={onClickButton}
          />
        </div>
      </div>
    </div>
  )
}

export default PageHome;