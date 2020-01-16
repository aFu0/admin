<template>
  <div class="leftBar">
    <h1 class="logo">
      <img class="logo" src="~@/assets/images/logo.jpg" alt="logo" />
    </h1>
    <el-menu
      :default-active="routerActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#27426b"
      text-color="#fff"
      router
    >
      <template v-for="menu in menuBar">
        <el-submenu v-if="!menu.hide" :key="menu.id" :index="menu.path">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <svg-icon class="menu-icon" :iconNames="menu.meta.icon"></svg-icon>
            <span>{{ menu.meta.monicker }}</span>
          </template>
          <el-menu-item
            v-for="list in menu.children"
            :key="list.path"
            :index="list.path"
            >{{ list.meta.name }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "leftBar",
  data() {
    return {
      // 从路由里那显示的页面
      menuBar: [],
      routerActive: "/control/index"
    };
  },
  created() {
    this.menuBar = this.$router.options.routes;
    this.routerActive = this.$route.path;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(this.$route);
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 88px;
  margin: 26px auto;
}
.leftBar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 250px;
  height: 100vh;
  background-color: #344a5f;
}
.menu-icon {
  padding-right: 6px;
  font-size: 18px;
}
</style>
