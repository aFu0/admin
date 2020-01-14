<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",
  props: {},
  iconName() {
    return `#${this.iconNames}`;
  },
  svgClass() {
    if (this.className) {
      return "svg-icon " + this.className;
    } else {
      return "svg-icon";
    }
  }
};
</script>

<style lang="scss" scoped></style>
