/**
 * 用户登录Action操作
 */
'use strict';
import * as types from '../common/ActionTypes';
export function showMaskAction(username, password) {
  return dispatch => {
    dispatch(showMask())
  }
}
export function hideMaskAction(username, password) {
  return dispatch => {
    dispatch(hideMask())
  }
}
function showMask() {
  return {
    type: types.SHOW_MASK_ACTION
  }
}

function hideMask() {
  return {
    type: types.HIDE_MASK_ACTION
  }
}