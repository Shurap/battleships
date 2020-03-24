import {
  CHANGE_GAME_PHASE_IN_STORE,
  CHANGE_TURN_IN_STORE
} from '../constants';

const initialState = {
  phase: 'begin',
  turn: '',
};

function condition(state = initialState, action) {
  switch (action.type) {

    case CHANGE_GAME_PHASE_IN_STORE:
      return { ...state, phase: action.data };

    case CHANGE_TURN_IN_STORE:
      return { ...state, turn: action.data };

    default:
      return state;
  }
}

export default condition;