import React from 'react';
import { useState } from 'react';
import SvgShip from '../svg/SvgShip';
import SvgEmpty from '../svg/SvgEmpty';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeContentFieldInStore } from '../../redux/actions/actionField';
import styles from './Cell.module.scss';

const Cell = (props) => {

  const [state, setState] = useState('empty');

  const onClickToCell = () => {
    if (state === 'empty') {
      setState('ship');
      props.changeContentFieldInStore('myField', props.id, 'ship')
    }
    if (state === 'ship') {
      setState('empty');
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
  changeContentFieldInStore
}, dispatch);


export default connect(null, mapDispatchToProps)(Cell);