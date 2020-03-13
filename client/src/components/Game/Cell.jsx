import React from 'react';
import { useState } from 'react';
import SvgShip from '../svg/SvgShip';
import SvgEmpty from '../svg/SvgEmpty';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeContentFieldInStore } from '../../redux/actions/actionField';
import { incrementCountShipsMyFieldInStore, decrementCountShipsMyFieldInStore } from '../../redux/actions/actionBegin';
import styles from './Cell.module.scss';

const Cell = (props) => {

  const onClickToCell = () => {
    if (props.content === 'empty') {
      props.incrementCountShipsMyFieldInStore();
      props.changeContentFieldInStore('myField', props.id, 'ship')
    }
    if (props.content === 'ship') {
      props.decrementCountShipsMyFieldInStore();
      props.changeContentFieldInStore('myField', props.id, 'empty')
    }
  }

  return (
    <div className={styles.cell} onClick={onClickToCell}>
      {props.content === 'ship' && <SvgShip />}
      {props.content === 'empty' && <SvgEmpty />}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeContentFieldInStore,
  incrementCountShipsMyFieldInStore,
  decrementCountShipsMyFieldInStore
}, dispatch);


export default connect(null, mapDispatchToProps)(Cell);