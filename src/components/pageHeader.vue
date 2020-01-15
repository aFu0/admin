<template>
  <div class="pageHeader">
    <div class="pageHeader__left">
      <svg-icon iconNames="list"></svg-icon>
    </div>
    <div class="pageHeader__right">
      <div class="head-img">
        <img class="head-img__user-img" src="@/assets/images/logo.jpg" alt="" />
        <span class="head-img__user-name">{{ userName }}</span>
      </div>
      <div class="close">
        <svg-icon @click="close" iconNames="close"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { getName, removeToken, removeName } from "@/utils/cookie";
export default {
  name: "pageHeader",
  data() {
    return {
      userName: getName()
    };
  },
  created() {
    console.log(getName());
  },
  methods: {
    close() {
      removeToken();
      removeName();
    }
  }
};
</script>

<style lang="scss" scoped>
.pageHeader {
  position: fixed;
  top: 0;
  left: 0;
  height: 76px;
  width: 100%;
  padding-left: 250px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  line-height: 76px;
  background-color: #fff;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  &__left {
    padding-left: 30px;
    font-size: 32px;
  }
  &__right {
    display: flex;
  }
}
.head-img {
  min-width: 120px;
  padding-right: 10px;
  &__user-img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    vertical-align: middle;
  }
  &__user-name {
    padding-left: 10px;
    font-size: 14px;
    font-weight: 600;
    vertical-align: middle;
  }
}
.close {
  width: 76px;
  border-left: 1px solid #ededed;
  font-size: 32px;
  text-align: center;
}
</style>
