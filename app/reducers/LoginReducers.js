'use strict';
import * as types from '../common/ActionTypes';

const initialState = {
  isLogin: false
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.PERFORM_LOGIN_ACTION:
      return Object.assign({}, state, {
        isLogin: !state.isLogin
      })
    default:
      return state
  }
}
