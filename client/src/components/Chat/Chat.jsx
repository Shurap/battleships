import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Chat.module.scss';
import { useSelector } from 'react-redux';
import { sendMessage } from '../socketio/socketio';

const Chat = () => {
//TODO button and edit get small
  const nick = useSelector((state) => state.info.nick)
  const room = useSelector((state) => state.info.room)
  const messages = useSelector((state) => state.chat.messages)

  const [message, setMessage] = useState('');

  useEffect(() => {
    
    const block = document.getElementById("messages");
    block.scrollTop = block.scrollHeight;
    //TODO ref
  })

  const onTextChange = (e) => {
    setMessage(e.target.value)
  }

  const onMessageSubmit = () => {
    sendMessage({ nick, room, message })
    setMessage('')
  }

  const allChat = messages.map(({ nick, message }, index) => {
    return (
      <div key={index}>
        <span style={{ color: "green" }}>{nick}: </span>
        <span>{message}</span>
      </div>
    )
  })

  return (
    <div className={styles.chat}>
      <div>{`${nick} (${room})`}</div>
      <div className={styles.messages} id='messages'>{allChat}</div>
      <div className={styles.wrapperSend}>
        <input className={styles.inputChat} onChange={onTextChange} value={message} />
        <button className={styles.button} onClick={onMessageSubmit}>Send</button>
      </div>
    </div>
  )
}
//TODO crash button send
export default Chat;