<template>
  <div>
    <el-button type="danger" class="add-class">添加一级分类</el-button>
    <section class="content">
      <div class="content__left">
        <div class="content__head">
          <h3>新闻</h3>
        </div>
        <ul>
          <li>子级</li>
          <li>子级</li>
          <li>子级</li>
          <li>子级</li>
        </ul>
      </div>
      <div class="content__right">
        <div class="content__head ">
          <h3>一级分类编辑</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "infoClass"
};
</script>

<style lang="scss" scoped>
.add-class {
  color: #fff;
}
.content {
  display: flex;
  padding-top: 30px;
  &__head {
    height: 44px;
    padding-left: 10px;
    font-weight: 600;
    line-height: 44px;
    font-size: 14px;
    background-color: #f3f3f3;
  }

  &__left {
    width: 30%;
  }
  &__right {
    width: 66%;
    margin-left: 4%;
  }
}
</style>
