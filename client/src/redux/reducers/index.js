import { combineReducers } from 'redux';
import chat from './reducerChat';
import fields from './reducerField';
import begin from './reducerBegin';
import info from './reducerInfo';
import condition from './reducerCondition';

const reducers = combineReducers({
  chat,
  fields,
  begin,
  info,
  condition
});

export default reducers;