/*formate Date*/
import _ from 'lodash';
import {
    PermissionsAndroid,
    NativeModules,
    Alert,
    Text
} from 'react-native';
import asyncstorage from './cache';
import HYEject from '../component/HYEject';

//var pushNative = NativeModules.PushNative;
//获取年天数
const getYearDays = function (year) {
    var totalDays = 365;
    if (year % 4 == 0 && year % 100 != 0) {
        totalDays = 366;
    }
    return totalDays;
}
//copy
function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        var len = obj.length;
        for (var i = 0; i < len; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
};
//获取从startDate 开始后daysNum天 以内的周六周天数组
const getWeekends = function (startDate, daysNum) {
    var weekends = [];//周末数组，元素yyyy-mm-dd
    for (var i = 0; i <= daysNum; i++) {
        console.log("startDate:" + startDate);
        //let dd = "";
        let dd = clone(startDate);
        dd.setDate(dd.getDate() + i);//获取AddDayCount天后的日期
        let y = dd.getFullYear();
        let m = dd.getMonth() + 1;//获取当前月份的日期
        let d = dd.getDate();
        let dayNum = dd.getDay();//得到0到6
        if (dayNum == 0 || dayNum == 6) {//得到周末
            if (m < 10) m = "0" + m;
            if (d < 10) d = "0" + d;
            var str = y + "-" + m + "-" + d;
            weekends.push(str);
        }
    }
    return weekends;
}
// date 转换为 以分隔符 例如："-"：yyyy-mm-dd ； " "：yyyy mm dd
const formatDate = function (date, split) {
    var splitV = split || "-";
    if (date) {
        let y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();
        m = m < 10 ? "0" + m : m;
        d = d < 10 ? "0" + d : d;
        return y + splitV + m + splitV + d;
    }
    return date;
}
const reverseFormatDate = function (str) {
    var datestr = str.replace(/[^\d]/g,"");
    if(datestr.length == 8){
        let y = datestr.substr(0,4),m = datestr.substr(4,2),d = datestr.substr(6,2);
        m  = m.replace(/^0{1}/,"");
        m = parseInt(m) - 1;
        return new Date(y,m,d);
    }
    return str;
}

const requestAllPermission = async (list, success, fail) => {
    let res = await PermissionsAndroid.requestMultiple(list);
    let result = true
    _.forEach(res, (item) => {
        if(PermissionsAndroid.RESULTS.GRANTED != item) result = false
    })
    if(result) {
        success && success()
    } else {
        fail && fail()
    }
}
//错误弹框处理TODO 需要定制
const handerError = function (options) {
/*
* options Object
*   title string 提示框title
*   msg string 提示框 content
*   btnArr Array   提示框按钮组，默认一个按钮，只是关闭不做任何处理
*      btnArr 元素 Object
*      title 按钮文字
*      callback  按钮回调
* */
    let btnArr = [];
    if(options.btnArr){
        options.btnArr.forEach(function (el,i) {
            let obj = {
                text:el.title,
                onPress:el.callback
            }
            if(i<3){
                btnArr.push(obj);
            }
        });
    }else {
        let obj = {
            text:"确定",
            onPress: () => console.log('OK Pressed')
        }
        btnArr.push(obj);
    }
    Alert.alert(
        options.title?options.title:'',
        options.msg ? options.msg : "", btnArr,
        { cancelable: false }
    )
}
//过滤是否登录
const filter = function(result,callback){
    //console.log("run here");
    console.log("result.code:*********"+result.code);
    if(result && result.code === "000001"){//该登录态失效码值待确认TODO
        //清除token
        asyncstorage.put("token","");
        //跳转到登录页面
        try {
            // pushNative.RNInvokeOCLoginOrRegistWithCallBack((error, events)=>{
            //     if (error) {
            //         //console.log(error);
            //         handerError({msg:error});
            //     }else {
            //         console.log('登录获得的token****+++++'+ events);
            //         //重设token
            //          asyncstorage.put("token",encodeURIComponent(events?events:""));
            //         if(callback){callback()}
            //     }
            // });
        } catch(e) {
            return result.data;
        }
    }else if(result.code != "000000"){
        //return result.data;
        let msg = result.message && result.message != "" ? result.message:"服务异常，请稍后重试!"
        handerError({msg:msg});
    }else{
        return result.data;
    }
}
//获取到token
const setToken = function (callbackFun) {
    try {
        // pushNative.RNGetTokenCallBack((error, events)=>{
        //     asyncstorage.put("token",encodeURIComponent(events?events:""));
        //     //asyncstorage.put("token","t12233ddd");
        //     if(callbackFun)callbackFun();
        // })
    } catch(e) {
        //return result.data;
        if(callbackFun)callbackFun();
    }
}

module.exports = {
    getYearDays,
    getWeekends,
    formatDate,
    clone,
    requestAllPermission,
    filter,
    setToken,
    reverseFormatDate,
    handerError
};