import React from 'react';
import Field from '../Field/Field';
import styles from './PageGame.module.scss';
import Chat from '../Chat/Chat';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getCellUnderAim } from '../../selectors/getCellUnderAim';
import { sendShoot } from '../socketio/socketio';
import { incrementNumberMoves } from '../../redux/actions/actionCondition';

const PageGame = () => {

  const dispatch = useDispatch()

  const myField = useSelector((state) => state.fields.myField);
  const enemyField = useSelector((state) => state.fields.enemyField);
  const turn = useSelector((state) => state.condition.turn);
  const player = useSelector((state) => state.info);
  const cellUnderAim = useSelector((state) => getCellUnderAim(state));


  const onClickButton = () => {
    sendShoot(player, cellUnderAim.id);
    dispatch(incrementNumberMoves());
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