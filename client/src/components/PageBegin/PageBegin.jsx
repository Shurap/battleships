import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chat from '../Chat/Chat';
import Field from '../Field/Field';
import Button from '../Button/Button';
import styles from './PageBegin.module.scss';
import { sendMyField } from '../socketio/socketio';
import { changeGamePhaseInStore } from '../../redux/actions/actionCondition';

const PageBegin = () => {

  const dispatch = useDispatch()

  const myField = useSelector((state) => state.fields.myField);
  const countShips = useSelector((state) => state.begin.countShipsMyField);
  const info = useSelector((state) => state.info);
  const condition = useSelector((state) => state.condition.phase);

  const onClickButton = () => {
    sendMyField(info, myField);
    dispatch(changeGamePhaseInStore('wait'));
  }

  return (
    <div className={styles.pageBegin}>
      <div className={styles.content}>

        <div className={styles.one}>
          <Chat />
        </div>

        <div className={styles.two}>
          <Field
            array={myField}
            type='myField'
          />
        </div>

        <div className={styles.three}>
          <Button
            state={countShips === 5 && condition === 'begin'}
            name={'Begin'}
            click={onClickButton}
          />
        </div>
        
      </div>
    </div >
  )
}

export default PageBegin;