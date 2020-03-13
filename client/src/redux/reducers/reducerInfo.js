import {
  ADD_NICK_TO_STORE,
  ADD_INFO_TO_STORE
} from '../constants';

const initialState = {
  id: '',
  nick: '',
  room: ''
};

function info(state = initialState, action) {
  switch (action.type) {

    case ADD_INFO_TO_STORE:
      return {
        ...state,
        id: action.data.id,
        nick: action.data.nick,
        room: action.data.room
      };

    default:
      return state;
  }
}

export default info;