import {
  INCREMENT_COUNT_SHIPS_MYFIELD_IN_STORE,
  DECREMENT_COUNT_SHIPS_MYFIELD_IN_STORE
} from '../constants';

const initialState = {
  countShipsMyField: 0
};

function begin(state = initialState, action) {
  switch (action.type) {

    case INCREMENT_COUNT_SHIPS_MYFIELD_IN_STORE:
      const newValueInc = (state.countShipsMyField >= 5) ? 5 : state.countShipsMyField + 1
      return { ...state, countShipsMyField: newValueInc };

    case DECREMENT_COUNT_SHIPS_MYFIELD_IN_STORE:
      const newValueDec = (state.countShipsMyField <= 0) ? 0 : state.countShipsMyField - 1
      return { ...state, countShipsMyField: newValueDec };

    default:
      return state;
  }
}

export default begin;