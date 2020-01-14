import layout from "@/layout";

const info = {
  path: "/info",
  name: "info",
  component: layout,
  monicker: "信息管理",
  redirect: "/info/index",
  children: [
    {
      path: "/info/index",
      name: "info",
      component: () => import("@/views/info/index"),
      meta: {
        name: "信息列表"
      }
    },
    {
      path: "/infoClass",
      name: "infoClass",
      component: () => import("@/views/info/infoClass"),
      meta: {
        name: "信息分类"
      }
    }
  ]
};

export default info;
