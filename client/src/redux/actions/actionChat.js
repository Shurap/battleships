import {
  ADD_CHAT_MESSAGE_TO_STORE
} from '../constants';

export function addChatMessageToStore(data) {
  return {
    type: ADD_CHAT_MESSAGE_TO_STORE,
    data
  }
}