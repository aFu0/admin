<template>
  <div v-if="$route.meta.hide">
    <router-view :key="$route.path" />
  </div>
  <div v-else>
    <div class="contentArea">
      <div class="allContent">
        <p>{{ $route.hide }}</p>
        <router-view :key="$route.path" />
      </div>
    </div>
    <leftBar />
    <pageHeader />
  </div>
</template>

<script>
import leftBar from "@/components/leftBar";
import pageHeader from "@/components/pageHeader";
export default {
  name: "layout",
  created() {
    // console.log(this.$route);
  },
  components: {
    leftBar,
    pageHeader
  }
};
</script>

<style lang="scss" scoped>
.contentArea {
  width: 100%;
  min-height: 100vh;
  padding: 76px 0 0 250px;
  box-sizing: border-box;
  background-color: #f7f7f7;
}
.allContent {
  // min-height: 100%;
  padding: 30px;
  box-sizing: border-box;
  margin: 30px 30px 0 30px;
  border-radius: 6px;
  background-color: #fff;
}
</style>
