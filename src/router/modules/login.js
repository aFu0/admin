import layout from "@/layout";

const login = {
  path: "/login",
  redirect: "/login/index",
  component: layout,
  monicker: "登录",
  // 不在后台菜单显示
  hide: true,
  children: [
    {
      path: "index",
      name: "login",
      component: () => import("@/views/login"),
      meta: {
        // 不在后台菜单显示
        name: "登录",
        hide: true
      }
    }
  ]
};
export default login;
