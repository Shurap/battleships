import React from 'react';
import { connect } from 'react-redux';
import Cell from '../Cell/Cell'
import SvgField from '../svg/SvgField'
import styles from './MyField.module.scss';

const MyField = (props) => {

  const cells = props.myField.map((element) => {
    return (
      <div
        key={element.id}
      >
        <Cell
          id = {element.id}
          // content ={element.content}
        />
      </div>
    )
  });

  return (
    <div className={styles.myField}>
      <SvgField cells={cells}/>
      {/* {cells} */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  myField: state.fields.myField,
});

export default connect(mapStateToProps, null)(MyField);