import React from 'react';
import { useSelector } from 'react-redux';
import Chat from '../Chat/Chat';
import Field from '../Game/Field';
import styles from './PageBegin.module.scss';
import { sendMyField } from '../socketio/socketio';

const PageBegin = (props) => {

  const myField = useSelector((state) => state.fields.myField);
  const countShips = useSelector((state) => state.begin.countShipsMyField);
  //const arrayMyField = useSelector((state) => state.fields.myField) 
  const info = useSelector((state) => state.info);

  const onClickToStart = () => {
    sendMyField(info, myField);
    props.history.push('/game');
  }

  return (
    <div className={styles.pageBegin}>
      <Chat />
      <Field array={myField} />
      {countShips === 5 &&
        <button onClick={onClickToStart}>Start</button>
      }
    </div>
  )
}

export default PageBegin;