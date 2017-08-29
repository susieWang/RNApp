/**
 * 用户登录Action操作
 */
'use strict';
import * as types from '../common/ActionTypes';
export function performLoginAction(username, password) {
  return dispatch => {
    dispatch(performLogin());
    // setTimeout(
    //   () => {
    //     client.addMiddleware(form());
    //     client.addMiddleware(request => {
    //       request.options.headers['appkey'] = '8a9283a0567d5bea01567d5beaf90000';
    //     });
    //     client.post(LOGIN_ACTION, {
    //       form: {
    //         username: username,
    //         password: password,
    //       },
    //     }).then(response => {
    //       return response.json();
    //     }).then((result) => {
    //       dispatch(receiveLoginResult(result));
    //       if (result.code === '0') {
    //         //登录成功..
    //         toastShort('登录成功...');
    //       } else {
    //         toastShort(result.msg);
    //       }
    //     }).catch((error) => {
    //       toastShort('网络发生错误,请重试!')
    //     });
    //   },
    //   3000
    // );

  }
}
function performLogin() {
  return {
    type: types.PERFORM_LOGIN_ACTION,
  }
}