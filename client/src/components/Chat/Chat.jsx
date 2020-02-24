import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../socketio/socketio';

const Chat = (props) => {

  const [message, setMessage] = useState('');
  const [nick, setNick] = useState('');

  const onNickChange = (e) => {
    setNick(e.target.value)
  }

  const onTextChange = (e) => {
    setMessage(e.target.value)
  }

  const onMessageSubmit = () => {
    sendMessage({ nick, message })
    setMessage('')
  }


  const allChat = props.messages.map(({ nick, message }, index) => {
    return (
      <div key={index}>
        <span style={{ color: "green" }}>{nick}: </span>
        <span>{message}</span>
      </div>
    )
  })

  return (
    <div>
      <input onChange={onNickChange} value={nick} />
      <input onChange={onTextChange} value={message} />
      <button onClick={onMessageSubmit}>Send</button>
      <div>{allChat}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
});

export default connect(mapStateToProps, null)(Chat);