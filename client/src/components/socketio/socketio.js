import io from "socket.io-client";
import { addChatMessageToStore } from '../../redux/actions/actionChat'
import store from '../../redux/store'
import { addInfoToStore } from '../../redux/actions/actionInfo';

const socket = io.connect("http://localhost:5000");

socket.on('chat message', ({ nick, message }) => {
  store.dispatch(addChatMessageToStore({ nick, message }));
});

socket.on('terminal', (message) => {
  store.dispatch(addChatMessageToStore({ nick: 'system', message }));
});

socket.on('connected to room', (info) => {
  store.dispatch(addInfoToStore(info));
});

export const sendMessage = (message) => {
  socket.emit("chat message", message);
}

export const createGame = (nick, game) => {
  socket.emit('create game', { nick, game })
}