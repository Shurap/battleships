import {
  CHANGE_CONTENT_FIELD_IN_STORE
} from '../constants';

export function changeContentFieldInStore(fieldName, id, content) {
  return {
    type: CHANGE_CONTENT_FIELD_IN_STORE,
    fieldName,
    id,
    content
  }
}