// 引入 Vue 挂载到全局上
import Vue from "vue";

// 引入 svgIcon 组件
import svgIcon from "@/components/svgIcon/index";

// 注册组件
Vue.component("svg-icon", svgIcon);

// 导入 svg 图片
const req = require.context("./svg", false, /\.svg$/);

const requireAll = requireContext => {
  requireContext.keys().map(requireContext);
};

requireAll(req);
