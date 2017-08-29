"use strict";
/*
 * 缓存工具 AsyncStorage
 * */
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

var defaultExpires = 1000 * 3600 * 24;
var storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,

    // Use AsyncStorage for RN, or window.localStorage for web.
    // If not set, data would be lost after reload.
    storageBackend: AsyncStorage,

    // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: defaultExpires,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired,
    // the corresponding sync method will be invoked and return
    // the latest data.
    sync : {
        // we'll talk about the details later.
    }
})
//debugger;
//AsyncStorage.setItem("a","1");
/*
 * 本地缓存缓存接口
 * */
const asyncstorage = {
    /*
     * @param {String} key 键名
     * @param {String/Object} value 值，如果是obj，类似：
         var userA = {
             name: 'A',
             age: 20,
             tags: [
                 'geek',
                 'nerd',
                 'otaku'
             ]
         };
     * @param {Number} cacheTime 缓存时间设置，单位ms
     * @param {boolean} neverExpire true 永久有效
     * */
    put: (key, value, cacheTime,neverExpire)=>{
        //Base.put(key, value, cacheTypes.LOCAL, cacheTime)
        storage.save({
            key: key,   // Note: Do not use underscore("_") in key!
            data: value,
            // if not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: neverExpire ? null : (cacheTime?cacheTime:defaultExpires)
        });
    },
    /*
     * 获取本地缓存接口
     * @param {String} key 键名
     * @return promise
     * */
    get: key =>storage.load({key: key}),
    /*
     * 清除缓存
     * @param {String} key 键名
     * @return {undefined}
     * */
    remove: key => storage.remove({key: key})
}
export default asyncstorage;
/*
例如：
asyncstorage.put("test","abcd");
asyncstorage.get("test2").then(function (res) {
 //res "abcd"
 }).catch(function (error) {
 console.log(error);
 });

 let obj1 = {
 a : "1",
 b :2,
 c :["ss","zz"]
 };
 asyncstorage.put("test2",obj1);
 asyncstorage.get("test2").then(function (res) {
 //res {a: "1", b: 2, c: Array(2)}
 }).catch(function (error) {
 console.log(error);
 });
* */