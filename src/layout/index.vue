<template>
  <div>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  name: "layout"
};
</script>

<style lang="scss" scoped></style>
