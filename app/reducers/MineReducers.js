//我的 相关处理
import * as Type from "../common/ActionTypes";

//初识状态
let initalState = {

};
export default function mine(state = initalState, action) {
    //debugger;
    switch (action.type) {
        // case Type.FINANCING_DATA:
        //     return Object.assign({}, state, {
        //         financingData:action.data.data
        //     });
        default:
            return state;
    }
}