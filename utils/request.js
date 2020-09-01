import axios from "axios";
import {getUserInfo} from '~/utils/common';
import * as common from '~/utils/common';
// import storage from '~/utils/localStorage';
import { Toast } from 'vant';

let request = axios.create({
  // baseURL: 'http://223.4.64.26:10000',     //基础路径,根据不同环境设置 baseURL, 最终发送请求时的URL为: baseURL + 发送请求时写URL ,
  // timeout: 5000,     //超时时间，5000毫秒,
});

//设置请求头中的token
request.defaults.headers.common["token"] = getUserInfo().token;

request.interceptors.request.use(function (config) {
  return config;
}, function (err) {
  return Promise.reject(err);
});

request.interceptors.response.use(async function (res) {
  const {data} = await res;
  const {success, exceptionContent, value, errorCode} =data
  if (success) {
    return value || {};
  } else {
    //检验类提示
    if (errorCode === 'validator') {
      let messageData = '';
      if (res?.attachments?.errors && res.attachments.errors.length) {
        res.attachments.errors.forEach(s => messageData = messageData.concat(`${s.name}${s.message}`, ';'));
        message.error(messageData);
      }
    } else if (errorCode === 'AUTH.RESOURCE.E0002' || errorCode === 'AUTH.RESOURCE.E0001') {
      // 防止连续弹出多个message
      Toast.clear();
      Toast.fail(exceptionContent);
      setTimeout(()=>
        {
          window.location.href = `${process.env.url}#/`;
          common.removeAllcookie();
          // storage.clear();
        },500
      )
    } else if(errorCode === 'CORE.E0001'){
      // 上一次操作正在处理中，请稍后再试---无需提示
    }else {
      // 防止连续弹出多个message
      Toast.clear();
      Toast.fail(exceptionContent || '接口未知错误');
    }
  }

}, function (err) {
  return err;
});

export default request;
