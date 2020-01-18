// 引入 cookie
import cookie from "vue-cookies";

// 获取 token
// 在 routerGuard 里用到
// request 里用到
export function getToken() {
  return cookie.get("admin_toKen");
}
// 存入 token
// 在登入了用到
export function setToken(toKen) {
  return cookie.set("admin_toKen", toKen);
}
// 删除 cookie
// 在 routerGuard 里用到
// 在 pageHeader 组件里用到
export function removeToken() {
  return cookie.remove("admin_toKen");
}
// 获取 name
// 在登入了用到
export function getName() {
  return cookie.get("admin_name");
}
// 存入 name
// 在 pageHeader 组件里用到
export function setName(name) {
  return cookie.set("admin_name", name);
}

// 删除 name
// 在 routerGuard 里用到
// 在 pageHeader 组件里用到
export function removeName() {
  return cookie.remove("admin_name");
}
