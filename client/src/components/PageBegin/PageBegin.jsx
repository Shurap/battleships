import React from 'react';
import { useSelector } from 'react-redux';
import Chat from '../Chat/Chat';
import Field from '../Field/Field';
import Button from '../Button/Button';
import styles from './PageBegin.module.scss';
import { sendMyField } from '../socketio/socketio';

const PageBegin = (props) => {

  const myField = useSelector((state) => state.fields.myField);
  const countShips = useSelector((state) => state.begin.countShipsMyField);
  const info = useSelector((state) => state.info);

  const onClickButton = () => {
    sendMyField(info, myField);
  }

  return (
    <div className={styles.pageBegin}>
      <Chat />
      <Field
        array={myField}
        type='myField'
      />
      {/* <div className={styles.wrapperButton}> */}
        <Button
          state={countShips === 5}
          name={'Begin'}
          click={onClickButton}
        />
      {/* </div> */}

      {/* {countShips === 5 &&
        <button onClick={onClickToStart}>Start</button>
      } */}
    </div>
  )
}

export default PageBegin;