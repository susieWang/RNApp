'use strict'
import {
    PermissionsAndroid
} from 'react-native';
//TODO 默认是产线，从app获取当前地址，如果
//https://www.easy-mock.com/mock/593f7b1e8ac26d795ff239dc/example
const baseUrl = 'https://www.easy-mock.com/mock/594b6ad58ac26d795f4302ca/front';
module.exports = {
    header: {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    },
    api: {
        creations: `${baseUrl}/api/creations`,
        orderlist: `${baseUrl}/orderlist`,
        financingData:`${baseUrl}/financingData`,
        financingList:`${baseUrl}/financinglist`
    },
    regs:{
        oldLoginPwd:/^\S+$/,
        loginPwd:/^[a-zA-Z0-9_]{8,16}$/,
        payPwd : /^\d{6}$/,
        phone: /^1[3-8][0-9]\d{8}$/,
        idCard : /(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        number: /^[0-9]*$/,
        isEmpty: /\S/
    },
    permissions:{
        CAMERA: PermissionsAndroid.PERMISSIONS.CAMERA,
        WRITE_EXTERNAL_STORAGE: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    }
}
//TODO 登录密码、支付密码校验规则待修改
