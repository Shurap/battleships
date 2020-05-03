import React from "react";
import * as s from '../socketio/socketio';
import Router from '../Router/Router';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Router />
    </div>
  )
}

export default App;