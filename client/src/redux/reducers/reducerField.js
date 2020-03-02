import {
  ADD_CHAT_MESSAGE_TO_STORE,
} from '../constants';

const myField = [];
const enemyField = [];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const content = {
      id: `${i}${j}`,
      content: 'empty'
    }
    myField.push(content) 
    enemyField.push(content)
  }
}

const initialState = {
  myField,
  enemyField
};

function fields(state = initialState, action) {
  switch (action.type) {

    case ADD_CHAT_MESSAGE_TO_STORE:
      return {...state};

    default:
      return state;
  }
}

export default fields;