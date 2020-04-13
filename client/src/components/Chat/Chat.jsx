import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';
import { sendMessage } from '../socketio/socketio';
import styles from './Chat.module.scss';
import { useEffect } from 'react';

const Chat = (props) => {

  const nick = useSelector((state) => state.info.nick)
  const room = useSelector((state) => state.info.room)
  const messages = useSelector((state) => state.chat.messages)

  const [message, setMessage] = useState('');

  useEffect(() => {
    
    const block = document.getElementById("messages");
    block.scrollTop = block.scrollHeight;
    // console.log('use', block)
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
      <div>
        <input onChange={onTextChange} value={message} />
        <button onClick={onMessageSubmit}>Send</button>
      </div>
      <div className={styles.messages} id='messages'>{allChat}</div>
    </div>
  )
}

export default Chat;