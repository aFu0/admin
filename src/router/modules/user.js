import layout from "@/layout";

const user = {
  path: "/user",
  name: "user",
  component: layout,
  redirect: "/user/index",
  meta: {
    monicker: "用户列表",
    icon: "user"
  },
  children: [
    {
      path: "/user/index",
      name: "userIndex",
      component: () => import("@/views/user"),
      meta: {
        name: "用户列表"
      }
    }
  ]
};

export default user;
