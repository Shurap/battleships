import {
  ADD_INFO_TO_STORE
} from '../constants';

const initialState = {
  socketId:'',
  dbId: '',
  nick: '',
  room: '',
  opponent: ''
};

function info(state = initialState, action) {
  switch (action.type) {

    case ADD_INFO_TO_STORE:
      return {
        ...state,
        socketId: action.data.socketId,
        dbId: action.data._id,
        nick: action.data.nick,
        room: action.data.room,
        opponent: action.data.opponent,
      };

    default:
      return state;
  }
}

export default info;