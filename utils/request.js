import axios from "axios";
import {getUserInfo} from './common';

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
  const {code, message} = data;

  //code==='0'代表请求成功
  if (code === '0') {
    return data.data||{};
  } else {
    // Message.warning(message);

    //code === '6666'时token失效，退回到登录页
    if (code === '6666') {
      window.location.href = '/';
    }
  }
}, function (err) {
  return err;
});

export default request;
