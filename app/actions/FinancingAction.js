import * as Type from "../common/ActionTypes";
import request from "../util/request";
import APIS from '../util/config';
import {filter} from '../util/utils';

/*
 * 接受数据action
 * */
export function receiveFinancingData(data) {
    return {
        type: Type.FINANCING_DATA,
        data: data
    };
}

/*
 * 获取首页数据动作
 *
 */
export function getFinancingDataAction(callback) {
    //debugger;
    return (dispatch, getState) => {
        request.post(APIS.api.financingData, {}).then(function(result) {
            return dispatch(receiveFinancingData(filter(result,callback)));
        });
    };
}