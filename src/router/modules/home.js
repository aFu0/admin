import layout from "@/views/home";

const home = {
  path: "/home",
  redirect: "/home/index",
  component: layout,
  children: [
    {
      path: "index",
      name: "home",
      component: () => import("@/views/home")
    }
  ]
};

export default home;
