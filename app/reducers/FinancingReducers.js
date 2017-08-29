//融资相关的处理都写到这个reducer中
import * as Type from "../common/ActionTypes";

//初识状态
let initalState = {
    financingData : {
        totalAmount:0,
        isApplyed:false,
        contractNo : null
    }
};
export default function Finaning(state = initalState, action) {
    //debugger;
    //TODO   根据后台数据,取值会再次修改
    switch (action.type) {
        case Type.FINANCING_DATA:
            return Object.assign({}, state, {
                financingData:action.data ? action.data : initalState.financingData
            });
        default:
            return state;
    }
}