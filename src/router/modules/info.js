import layout from "@/layout";

const info = {
  path: "/info",
  name: "info",
  component: layout,
  redirect: "/info/index",
  meta: {
    monicker: "信息管理",
    icon: "order"
  },
  children: [
    {
      path: "/info/index",
      name: "infoIndex",
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
