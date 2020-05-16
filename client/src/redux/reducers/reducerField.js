import {
  CHANGE_CONTENT_FIELD_IN_STORE,
} from '../constants';

const myField = [];
const enemyField = [];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const content = {
      id: `${i}${j}`,
      content: 'empty',
      count:''
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

    case CHANGE_CONTENT_FIELD_IN_STORE:
      const indexOfChangedElement = state[action.fieldName].findIndex(element => element.id === action.id);
      const newArray = [
        ...state[action.fieldName].slice(0, indexOfChangedElement),
        { id: action.id, content: action.content, count: action.count },
        ...state[action.fieldName].slice(indexOfChangedElement + 1)
      ];
      return {
        ...state, [action.fieldName]: newArray
      }

    default:
      return state;
  }
}

export default fields;