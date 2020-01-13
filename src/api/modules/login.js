import { post } from "@/api/request";
const login = {
  // 获取验证码
  getCode(params) {
    return post("/getSms/", params);
  },
  // 注册
  getRegister(params) {
    return post("/register/", params);
  },
  // 登录
  getLogin(params) {
    return post("/login/", params);
  }
};
export default login;
