// 引入路由
import router from "./index";

// 导入方法
import { getToken, removeToken, removeName } from "@/utils/cookie";

// 添加白名单
const whiteRouter = ["/login/index"];

// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to);
  if (getToken()) {
    if (to.path === "/login/index") {
      // 判断 去的路径是 /login/index 的时候把 token 删除掉 ，不登入就进不去了
      removeToken();
      removeName();
      next();
    } else {
      // TODO 获取用户角色
      // TODO 动态分配路由权限
      next();
    }
    console.log("cookie 存在");
  } else {
    console.log("cookie 不存在");
    if (whiteRouter.indexOf(to.path) !== -1) {
      //cookie 存在 执行语句
      next();
    } else {
      next("/login/index");
    }
  }
  // console.log(to); // 下一个页面 （将要进入的页面）
  // console.log(from); // 上一个页面 （ 将要离开的页面）
  // console.log(next);
  // next();
});
