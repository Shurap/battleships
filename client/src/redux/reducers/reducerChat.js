import {
  ADD_CHAT_MESSAGE_TO_STORE,
} from '../constants';

const initialState = {
  messages: [],
};

function chat(state = initialState, action) {
  switch (action.type) {

    case ADD_CHAT_MESSAGE_TO_STORE:
      return {...state, messages:[...state.messages, action.data]};

    default:
      return state;
  }
}

export default chat;