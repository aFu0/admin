import { post } from "@/api/request";
const login = {
  getCode(params) {
    return post("/getSms/", params);
  }
};
export default login;
