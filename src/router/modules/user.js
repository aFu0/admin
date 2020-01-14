import layout from "@/layout";

const user = {
  path: "/user",
  name: "user",
  component: layout,
  monicker: "用户列表",
  redirect: "/user/index",
  children: [
    {
      path: "/user/index",
      name: "user",
      component: () => import("@/views/user"),
      meta: {
        name: "用户列表"
      }
    }
  ]
};

export default user;
