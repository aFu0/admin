import layout from "@/layout";

const control = {
  path: "/control",
  name: "control",
  component: layout,
  monicker: "控制台",
  redirect: "/control/index",
  children: [
    {
      path: "/control/index",
      name: "control",
      component: () => import("@/views/control"),
      meta: {
        name: "控制台"
      }
    }
  ]
};

export default control;
