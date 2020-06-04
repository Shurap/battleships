import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SvgEdit from '../svg/SvgEdit';
import { createGame } from '../socketio/socketio';
import styles from './PageLogIn.module.scss';
import Button from '../Button/Button';

const PageLogIn = () => {
  // TODO Check for empty edit
  const [nick, setNick] = useState('');
  const [game, setGame] = useState('');

  const dispatch = useDispatch()

  const state = (nick && game) ? true : false;

  const onNickChange = (e) => {
    setNick(e.target.value)
  }

  const onGameChange = (e) => {
    setGame(e.target.value)
  }

  const onClickButton = () => {
    createGame(nick, game);
  }

  return (
    <div className={styles.pageLogIn}>
      <div className={styles.content}>

        <div className={styles.one}>
          <div className={styles.wrapperText}>Nick:</div>

          <div className={styles.wrapperSvg}>
            <input className={styles.input} onChange={onNickChange} value={nick} />
            <SvgEdit />
          </div>
        </div>

        <div className={styles.two}>
          <div className={styles.wrapperText}>Name of game:</div>

          <div className={styles.wrapperSvg}>
            <input className={styles.input} onChange={onGameChange} value={game} />
            <SvgEdit />
          </div>
        </div>

        <div className={styles.three}>
          <Button
            state={state}
            name={'Start'}
            click={onClickButton}
          />
        </div>
      </div>

    </div>
  )
}

export default PageLogIn;