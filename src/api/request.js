// 1. 引入 Axios
import Axios from "axios";
// 引入 element 的弹框
import { Message } from "element-ui";

// 2. 引入封装 axios 好的方法
import { requertUrl, requertByGet, requertByPost } from "@/api/axios";

// 引入 Token 方法
import { getToken, getName } from "@/utils/cookie";

//  3. 创建请求
const instance = Axios.create({
  // 请求地址
  baseURL: requertUrl(),
  // 请求超时时间
  timeout: 10000
});

// 给刚创建好的 instance 请求 赋予 all 和 spread 方法
instance.all = Axios.all;
instance.spaead = Axios.spaead;

// 给 post 设置请求头
instance.defaults.headers.post["Content-Type"] =
  "application/json; charset=UTF-8";

// get 请求
/**
 *
 * @param {String} url
 * @param {Object} params
 */
function get(url, params) {
  return requertByGet(instance, url, params);
}

// post 请求
/**
 *
 * @param {String} url
 * @param {Object} params
 */
function post(url, params) {
  return requertByPost(instance, url, params);
}
// 请求拦截
// 在发送请求之前做些什么
instance.interceptors.request.use(
  config => {
    // console.log(config);
    config.headers["Tokey"] = getToken();
    config.headers["UserName"] = getName();
    return config;
  },
  function(error) {
    // console.log(error);
    return Promise.reject(error);
  }
),
  // 响应拦截  resCode 为 0 的时候才能在页面上看到数据
  instance.interceptors.response.use(response => {
    let data = response.data;
    // resCode 不为 0 的时候 弹框警告
    if (data.resCode !== 0) {
      Message({
        message: data.message,
        type: "error"
      });
      return response;
    } else {
      Message({
        message: data.message,
        type: "success"
      });
      return response;
    }
  });

export { get, post };
