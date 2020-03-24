import io from "socket.io-client";
import { addChatMessageToStore } from '../../redux/actions/actionChat'
import store from '../../redux/store'
import { addInfoToStore } from '../../redux/actions/actionInfo';
import { changeGamePhaseInStore, changeTurnInStore } from '../../redux/actions/actionCondition';
import history from '../common/history'

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

socket.on('begin battle', () => {
  store.dispatch(changeGamePhaseInStore('battle'))
  history.push('/game')
})

socket.on('battle', (data) => {
  store.dispatch(changeTurnInStore(data))
});


export const sendMessage = (message) => {
  socket.emit("chat message", message);
}

export const createGame = (nick, game) => {
  socket.emit('create game', { nick, game })
}

export const sendMyField = (info, arrayMyField) => {
  socket.emit('field', { info, arrayMyField });
}

