import React from 'react';
import Chat from '../Chat/Chat';
import Field from '../Field/Field';
import styles from './PageEnd.module.scss';
import { useSelector } from 'react-redux';
import { getFinishedArray } from '../../selectors/getFinishedArray';
import withAuth from '../../hocs/withAuth';

const PageEnd = (props) => {

  const finishedArray = useSelector((state) => getFinishedArray(state, props.location.state.field));

  return (
    <div className={styles.pageEnd}>
      <div className={styles.content}>

        <div className={styles.one}>
          <Chat />
        </div>

        <div className={styles.two}>
          <Field
            array={finishedArray}
            type={'enemyField'}
          />
        </div>

        <div className={styles.three}>
          {props.location.state.text}
        </div>

      </div>
    </div>
  )
}

export default withAuth(PageEnd);