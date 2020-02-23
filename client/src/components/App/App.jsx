import React from "react";
import { useState, useEffect } from 'react';
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

const App = () => {

  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [nick, setNick] = useState('');

  useEffect(() => {
    socket.on('chat message', ({ nick, message }) => {
      setChat([...chat, { nick, message }])
    });
  });

  const onTextChange = (e) => {
    setMessage(e.target.value)
  }

  const onNickChange = (e) => {
    setNick(e.target.value)
  }

  const onMessageSubmit = () => {
    socket.emit("chat message", { nick, message });
    setMessage('')
  }


  const allChat = chat.map(({ nick, message }, index) => {
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

export default App;