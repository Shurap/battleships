import {
  CHANGE_GAME_PHASE_IN_STORE,
  CHANGE_TURN_IN_STORE,
  INCREMENT_NUMBER_MOVES,
  CHANGE_AUTHSTATUS_IN_STORE
} from '../constants';

const initialState = {
  phase: 'begin',
  turn: '',
  moves: 0,
  authStatus: false
};

function condition(state = initialState, action) {
  switch (action.type) {

    case CHANGE_GAME_PHASE_IN_STORE:
      return { ...state, phase: action.data };

    case CHANGE_TURN_IN_STORE:
      return { ...state, turn: action.data };

    case INCREMENT_NUMBER_MOVES:
      const newMoves = state.moves + 1
      return { ...state, moves: newMoves };

    case CHANGE_AUTHSTATUS_IN_STORE:
      return { ...state, authStatus: action.data };

    default:
      return state;
  }
}

export default condition;