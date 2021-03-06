import io from "socket.io-client";
import { addChatMessageToStore } from '../../redux/actions/actionChat'
import store from '../../redux/store'
import { addInfoToStore } from '../../redux/actions/actionInfo';
import { changeContentFieldInStore } from '../../redux/actions/actionField';
import history from '../common/history'
import {
  changeGamePhaseInStore,
  changeTurnInStore,
  changeAuthStatusInStore
} from '../../redux/actions/actionCondition';

// const socket = io.connect("http://localhost:5000");
// const socket = io();
const socket = (process.env.NODE_ENV === 'production') ? io() : io.connect("http://localhost:5000");

socket.on('chat message', ({ nick, message }) => {
  store.dispatch(addChatMessageToStore({ nick, message }));
  //TODO or .once instead .on
});

socket.on('terminal', (message) => {
  store.dispatch(addChatMessageToStore({ nick: 'system', message }));
});

socket.on('error', (message) => {
  console.log('error', message);
  // TODO make error message
});

socket.on('connected to room', (info) => {
  store.dispatch(addInfoToStore(info));
  store.dispatch(changeAuthStatusInStore(true));
  history.push('/begin');
});

socket.on('begin battle', () => {
  store.dispatch(changeGamePhaseInStore('battle'));
  history.push('/game')
})

socket.on('battle', (data) => {
  store.dispatch(changeTurnInStore(data))
});

socket.on('result shoot', (id, content, count, turn) => {
  store.dispatch(changeContentFieldInStore('enemyField', id, content, count));
  store.dispatch(changeTurnInStore(turn))
})

socket.on('where shoot', (id, content, turn) => {
  store.dispatch(changeContentFieldInStore('myField', id, content));
  store.dispatch(changeTurnInStore(turn));
})

socket.on('the end', (text, array) => {
  history.push({
    pathname: '/end',
    state: {
      text: text,
      field: array,
    }
  })
})

export const sendMessage = (message) => {
  socket.emit("chat message", message);
}

export const createGame = (nick, gameName) => {
  socket.emit('create game', { nick, gameName })
}

export const sendMyField = (info, arrayMyField) => {
  socket.emit('field', { info, arrayMyField });
}

export const sendShoot = (player, cellId) => {
  socket.emit('shoot', { player, cellId });
}
