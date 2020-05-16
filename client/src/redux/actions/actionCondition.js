import {
  CHANGE_GAME_PHASE_IN_STORE,
  CHANGE_TURN_IN_STORE,
  INCREMENT_NUMBER_MOVES
} from '../constants';

export function changeGamePhaseInStore(data) {
  return {
    type: CHANGE_GAME_PHASE_IN_STORE,
    data
  }
}

export function changeTurnInStore(data) {
  return {
    type: CHANGE_TURN_IN_STORE,
    data
  }
}

export function incrementNumberMoves() {
  return {
    type: INCREMENT_NUMBER_MOVES
  }
}
