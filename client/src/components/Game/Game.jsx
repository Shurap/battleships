import React from 'react';
import { connect } from 'react-redux';
import Field from './Field';
import styles from './Game.module.scss';
import Chat from '../Chat/Chat';
// import SvgShip from '../svg/SvgShip'

const Game = (props) => {
  return (
    <div className={styles.game}>
      <Chat />
      <Field array={props.myField} />
      <Field array={props.enemyField} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  myField: state.fields.myField,
  enemyField: state.fields.enemyField
});

export default connect(mapStateToProps, null)(Game);