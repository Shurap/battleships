import React from "react";
import * as s from '../socketio/socketio';
import Router from '../Router/Router';
// import Chat from '../Chat/Chat';
// import Game from '../Game/Game';
// import PageLogIn from '../PageLogIn/PageLogIn';
import styles from './App.module.scss';


const App = () => {
  return (
    <div className={styles.app}>
      <Router />
      {/* <PageLogIn /> */}
      {/* <Chat /> */}
      {/* <Game /> */}
    </div>
  )
}

export default App;