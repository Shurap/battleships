import {
  INCREMENT_COUNT_SHIPS_MYFIELD_IN_STORE,
  DECREMENT_COUNT_SHIPS_MYFIELD_IN_STORE
} from '../constants';

export function incrementCountShipsMyFieldInStore() {
  return {
    type: INCREMENT_COUNT_SHIPS_MYFIELD_IN_STORE
  }
}

export function decrementCountShipsMyFieldInStore() {
  return {
    type: DECREMENT_COUNT_SHIPS_MYFIELD_IN_STORE
  }
}