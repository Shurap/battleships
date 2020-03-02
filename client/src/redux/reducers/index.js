import { combineReducers } from 'redux';
import chat from './reducerChat';
import fields from './reducerField';

const reducers = combineReducers({
  chat,
  fields
});

export default reducers;