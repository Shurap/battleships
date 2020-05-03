import React from 'react';
import Field from '../Field/Field';
import styles from './PageGame.module.scss';
import Chat from '../Chat/Chat';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { getCellUnderAim } from '../../selectors/getCellUnderAim';
import { sendShoot } from '../socketio/socketio';

const PageGame = () => {

  const myField = useSelector((state) => state.fields.myField);
  const enemyField = useSelector((state) => state.fields.enemyField);
  const turn = useSelector((state) => state.condition.turn);
  const player = useSelector((state) => state.info);
  const cellUnderAim = useSelector((state) => getCellUnderAim(state));


  const onClickButton = () => {
    sendShoot(player, cellUnderAim.id);
    console.log('send:', player, cellUnderAim.id);
  }

  return (
    <div className={styles.pageGame}>
      <Chat />
      <Field
        array={myField}
        type={'myField'}
      />
      <Field
        array={enemyField}
        type={'enemyField'}
      />
      <Button
        state={(turn === 'turn')}
        name={'Shoot'}
        click={onClickButton}
      />
    </div>
  )
}

export default PageGame;