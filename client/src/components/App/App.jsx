import React from "react";
import * as s from '../socketio/socketio';
import Chat from '../Chat/Chat';
import MyField from '../MyField/MyField';
import styles from './App.module.scss';


const App = () => {
  return (
    <div className={styles.app}>
      <Chat />
     
      <MyField />
      
    </div>
  )
}

export default App;