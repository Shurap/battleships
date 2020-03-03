import React from 'react';
import { connect } from 'react-redux';
import Field from './Field';
import styles from './Game.module.scss';
// import SvgShip from '../svg/SvgShip'

const Game = (props) => {
  return (
    <div className={styles.game}>
      <Field array={props.myField} />
      <Field array={props.enemyField} />
      {/* <SvgShip /> */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  myField: state.fields.myField,
  enemyField: state.fields.enemyField
});

export default connect(mapStateToProps, null)(Game);