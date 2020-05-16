import {
  CHANGE_GAME_PHASE_IN_STORE,
  CHANGE_TURN_IN_STORE,
  INCREMENT_NUMBER_MOVES
} from '../constants';

const initialState = {
  phase: 'begin',
  turn: '',
  moves: 0
};

function condition(state = initialState, action) {
  switch (action.type) {

    case CHANGE_GAME_PHASE_IN_STORE:
      return { ...state, phase: action.data };

    case CHANGE_TURN_IN_STORE:
      return { ...state, turn: action.data };

    case INCREMENT_NUMBER_MOVES:
      const newMoves = state.moves +1
      return { ...state, moves: newMoves };

    default:
      return state;
  }
}

export default condition;