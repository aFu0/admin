import { post } from "@/api/request";

const info = {
  // 信息分类添加一级
  addFirstCategory(params) {
    return post("/news/addFirstCategory/", params);
  },
  // 获取信息分类   有子级分类
  getCategoryAll() {
    return post("/news/getCategoryAll/");
  },
  // 信息分类添加子级
  addChildrenCategory(params) {
    return post("/news/addChildrenCategory/", params);
  }
};
export default info;
