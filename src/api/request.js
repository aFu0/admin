// 1. 引入 Axios
import Axios from "axios";

// 2. 引入封装 axios 好的方法
import { requertUrl, requertByGet, requertByPost } from "@/api/axios";

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

export { get, post };
