import React from 'react';
import { connect } from 'react-redux';
import Field from '../Field/Field';
import styles from './PageGame.module.scss';
import Chat from '../Chat/Chat';
import Button from '../Button/Button';
// import SvgShip from '../svg/SvgShip'

const PageGame = (props) => {
  return (
    <div className={styles.pageGame}>
      <Chat />
      <Field
        array={props.myField}
        type={'myField'}
      />
      <Field
        array={props.enemyField}
        type={'enemyField'}
      />
      <Button />
    </div>
  )
}

const mapStateToProps = (state) => ({
  myField: state.fields.myField,
  enemyField: state.fields.enemyField
});

export default connect(mapStateToProps, null)(PageGame);