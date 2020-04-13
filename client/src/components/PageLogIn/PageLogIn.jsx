import React from 'react';
import { useState } from 'react';
import SvgEdit from '../svg/SvgEdit';
import { createGame } from '../socketio/socketio';
import styles from './PageLogIn.module.scss';
import Button from '../Button/Button';

const PageLogIn = (props) => {
  // TODO Check for empty edit
  const [nick, setNick] = useState('');
  const [game, setGame] = useState('');

  const state = (nick && game) ? true : false;

  const onNickChange = (e) => {
    setNick(e.target.value)
  }

  const onGameChange = (e) => {
    setGame(e.target.value)
  }

  const onClickButton = () => {
    createGame(nick, game);
    // props.history.push('/begin');
  }

  return (
    <div className={styles.PageLogIn}>
      <div className={styles.wrapperInputs}>

        <div className={styles.wrapperText}>Nick:</div>

        <div className={styles.wrapperSvg}>
          <input className={styles.inputPageLogIn} onChange={onNickChange} value={nick} />
          <SvgEdit />
        </div>

        <div className={styles.wrapperText}>Name of game:</div>

        <div className={styles.wrapperSvg}>
          <input className={styles.inputPageLogIn} onChange={onGameChange} value={game} />
          <SvgEdit />
        </div>

        <div className={styles.wrapperSvg}>
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