import layout from "@/layout";

const control = {
  path: "/control",
  name: "control",
  component: layout,
  redirect: "/control/index",
  meta: {
    monicker: "控制台",
    icon: "console"
  },
  children: [
    {
      path: "/control/index",
      name: "controlIndex",
      component: () => import("@/views/control"),
      meta: {
        name: "控制台"
      }
    }
  ]
};

export default control;
