import { combineReducers } from 'redux';
import chat from './reducerChat';
import fields from './reducerField';
import begin from './reducerBegin';
import info from './reducerInfo';

const reducers = combineReducers({
  chat,
  fields,
  begin,
  info
});

export default reducers;