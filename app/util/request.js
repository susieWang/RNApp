'use strict'
import queryString from 'query-string'
import _ from 'lodash'
import Mock from 'mockjs'
import config from './config'
import asyncstorage from './cache'
import util from "./utils"

module.exports = {
  get(url, params) {
      return new Promise(function(resolve, reject) {
          asyncstorage.get("token").then(function (res) {
              resolve(res);
          }).catch(function (error) {
              resolve("");
          });
      }).then(function(token) {
          var header = util.clone(config.header);
          var headers = _.extend(header.headers,{
              Authorization : token
          });
          var options = _.extend(header, {
              headers : headers,
              method:'GET',
              body:null
          })
          if (params) url += '?' + queryString.stringify(params);
          return fetch(url,options)
              .then(response => response.json())
              .then(response => Mock.mock(response))
              .catch(error => {
                  //console.warn("error:"+error)
                  util.handerError({
                      msg : "网络异常，请稍后重试"
                  })
              })
      });
    // if (params) url += '?' + queryString.stringify(params)
    // return fetch(url)
    //   .then(response => response.json())
    //   .then(response => Mock.mock(response))
    //   .catch(error => {
    //     console.warn(error)
    //   })
  },
  post(url, body) {
      return new Promise(function(resolve, reject) {
          asyncstorage.get("token").then(function (res) {
              resolve(res);
          }).catch(function (error) {
              resolve("");
          });
      }).then(function(token) {
          var header = util.clone(config.header);
          var headers = _.extend(header.headers,{
              Authorization : token
          });
          var options = _.extend(header, {
              body: JSON.stringify(body),
              headers : headers
          })
          //debugger;
          return fetch(url, options)
              .then(response => response.json())
              .then(response => Mock.mock(response))
              .catch(error => {
                  //console.warn(error)
                  util.handerError({
                      msg : "网络异常，请稍后重试"
                  })
              })
      });
  }
}