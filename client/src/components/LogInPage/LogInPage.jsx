import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SvgEdit from '../svg/SvgEdit';
import { createGame } from '../socketio/socketio';
import styles from './LogInPage.module.scss';

const LogInPage = (props) => {

  const [nick, setNick] = useState('');
  const [game, setGame] = useState('');

  const dispatch = useDispatch()

  const onNickChange = (e) => {
    setNick(e.target.value)
  }

  const onGameChange = (e) => {
    setGame(e.target.value)
  }

  const onClickOk = () => {
    createGame(nick, game);
    props.history.push('/game');
  }

  return (
    <div className={styles.LogInPage}>
      <div className={styles.wrapperInputs}>

        <div className={styles.wrapperText}>Nick:</div>

        <div className={styles.wrapperSvg}>
          <input className={styles.inputLogInPage} onChange={onNickChange} value={nick} />
          <SvgEdit />
        </div>

        <div className={styles.wrapperText}>Name of game:</div>

        <div className={styles.wrapperSvg}>
          <input className={styles.inputLogInPage} onChange={onGameChange} value={game} />
          <SvgEdit />
        </div>
      </div>
      <button className={styles.buttonLogInPage} onClick={onClickOk}>Ok</button>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   myField: state.fields.myField,
//   enemyField: state.fields.enemyField
// });

// export default connect(mapStateToProps, null)(Game);

export default LogInPage;