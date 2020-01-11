import layout from "@/layout";

const login = {
  path: "/login",
  redirect: "/login/index",
  component: layout,
  children: [
    {
      path: "index",
      name: "login",
      component: () => import("@/views/login")
    }
  ]
};
export default login;
