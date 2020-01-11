import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  }
];

// 模块自动导入

// 1. 导入文件
const requireRouter = require.context("./modules", true, /\.js$/);

// 2. requireRouter.keys() 转换数组  循环
requireRouter.keys().forEach(file => {
  // 3. file 文件名
  // 4. 拿出文件里面的内容
  const router = requireRouter(file).default;
  // 判断是否是数组
  if (Array.isArray(router)) {
    // 是数组展开
    routes.push(...router);
  } else {
    routes.push(router);
  }
});

const router = new VueRouter({
  routes
});

export default router;
