'use strict';
import * as types from '../common/ActionTypes';

const initialState = {
  showMask: false
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MASK_ACTION:
      return Object.assign({}, state, {
        showMask: true
      })
      case types.HIDE_MASK_ACTION:
      return Object.assign({}, state, {
        showMask: false
      })
    default:
      return state
  }
}
