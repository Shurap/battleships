import {
  ADD_INFO_TO_STORE
} from '../constants';

export function addInfoToStore(data) {

  return {
    type: ADD_INFO_TO_STORE,
    data
  }
}