<template>
  <div class="info-class">
    <el-button type="danger" class="add-class" @click="add"
      >添加一级分类</el-button
    >
    <section class="content">
      <!-- 左边 -->
      <div class="content__left">
        <div
          class="content__item"
          v-for="leftHeader in leftData"
          :key="leftHeader.id"
        >
          <!-- 一级分类 -->
          <div class="content__head">
            <h3>
              <svg-icon iconNames="packUp" class="content__is-packUp-icon" />{{
                leftHeader.category_name
              }}
            </h3>
            <!-- head 按钮 -->
            <div class="btn-sum">
              <el-button
                type="danger"
                class="btn-sum__content-btn"
                size="mini"
                round
                @click="headEditor"
                >编辑</el-button
              >
              <el-button
                type="success"
                class="btn-sum__content-btn"
                size="mini"
                round
                @click="addSublevel"
                >添加子级</el-button
              >
              <el-button
                class="btn-sum__content-btn btn-sum__content-btn--content-delect"
                size="mini"
                round
                @click="headDelect"
                >删除</el-button
              >
            </div>
          </div>
          <!-- 子集 -->
          <ul class="paths">
            <li
              class="paths__item"
              v-for="childrens in leftHeader.children"
              :key="childrens.parent_id"
            >
              <span>{{ childrens.category_name }}</span>
              <!-- 子级按钮 -->
              <div class="btn-sum">
                <el-button
                  type="danger"
                  class="btn-sum__content-btn"
                  size="mini"
                  round
                  @click="sublevelEditor"
                  >编辑</el-button
                >
                <el-button
                  class="btn-sum__content-btn btn-sum__content-btn--content-delect"
                  size="mini"
                  round
                  @click="sublevelDelect"
                  >删除</el-button
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右边 -->
      <div class="content__right">
        <div class="right-head ">
          <h3>一级分类编辑</h3>
          <div class="firstly">
            <label class="firstly__ipt-name" for="">一级分类名称：</label>
            <el-input
              placeholder="请输入内容"
              v-model="formLabelAlign.firstly"
              clearable
              class="firstly__firstlyipt"
              :disabled="disabledFirstly"
            >
            </el-input>
          </div>
          <div class="firstly" v-show="showSecond">
            <label class="firstly__ipt-name" for="">二级分类名称：</label>
            <el-input
              placeholder="请输入内容"
              v-model="formLabelAlign.second"
              clearable
              class="firstly__firstlyipt"
              :disabled="disabledSecond"
            >
            </el-input>
          </div>
          <el-button
            class="ensuer-btn"
            size="medium"
            type="danger"
            @click="ensuerAdd"
            >确定</el-button
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import API from "@/api/modules/info";
export default {
  name: "infoClass",
  data() {
    return {
      // 左边展示的数据
      leftData: [],
      // 输入框里的值
      formLabelAlign: {
        firstly: "",
        second: ""
      },
      // 二级输入框显隐
      showSecond: true,
      // 一级输入禁用
      disabledFirstly: true,
      // 二级输入禁用
      disabledSecond: true
    };
  },
  created() {
    API.getCategoryAll()
      .then(res => {
        this.leftData = res.data;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    // 左上角添加按钮
    add() {
      this.showSecond = false;
      this.disabledFirstly = false;
    },
    // 确定添加
    ensuerAdd() {
      if (this.showSecond) {
        // 添加子级
        API.addChildrenCategory({
          categoryName: this.formLabelAlign.firstly, //"分类名称",
          parentId: "695"
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
        console.log("二级");
      } else {
        // 添加一级信息分类
        API.addFirstCategory({
          categoryName: this.formLabelAlign.firstly //分类名称
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
      console.log("确定添加");
    },
    // 一级编辑
    headEditor() {
      this.add();
      console.log("一级编辑");
    },
    // 添加子级
    addSublevel() {
      // this.formLabelAlign.firstly = ;
      this.showSecond = true;
      this.disabledFirstly = false;
      this.disabledSecond = false;
      console.log("添加子级");
    },
    // 一级删除
    headDelect() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      console.log("一级删除");
    },
    // 子级编辑
    sublevelEditor() {
      this.addSublevel();
      console.log("子级编辑");
    },
    // 子级删除
    sublevelDelect() {
      this.headDelect();
      console.log("子级删除");
    }
  }
};
</script>

<style lang="scss" scoped>
.info-class {
  min-height: 300px;
}
.add-class {
  color: #fff;
}
.content {
  display: flex;
  padding-top: 30px;
  &__head {
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 44px;
    padding-left: 10px;
    font-weight: 600;
    line-height: 44px;
    font-size: 14px;
    &:hover {
      background-color: #f3f3f3;
      .btn-sum {
        display: block;
      }
    }
  }
  &__left {
    width: 30%;
    // position: relative;
  }
  &__is-packUp-icon {
    padding-right: 10px;
  }
  &__right {
    width: 66%;
    margin-left: 4%;
  }
}
.right-head {
  height: 44px;
  padding-left: 10px;
  font-weight: 600;
  line-height: 44px;
  font-size: 14px;
  background-color: #f3f3f3;
}
.btn-sum {
  display: none;
  padding-right: 10px;
  &__content-btn {
    padding: 4px 16px;
    font-size: 12px;
    color: #fff;
    &--content-delect {
      color: #344a5f;
    }
  }
}
.paths {
  padding-left: 16px;
  &__item {
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 44px;
    padding-left: 40px;
    line-height: 44px;
    &:hover {
      background-color: #f3f3f3;
      .btn-sum {
        display: block;
      }
    }
    &::before {
      content: "";
      height: 38px;
      position: absolute;
      top: -16px;
      left: 0px;
      border: 1px dotted #344a5f;
    }
    &::after {
      content: "";
      width: 30px;
      position: absolute;
      top: 25px;
      left: 0px;
      border: 1px dotted #344a5f;
    }
  }
}
// 右边
.ensuer-btn {
  position: relative;
  left: 110px;
  top: 0;
  margin-top: 20px;
  color: #fff;
}
.firstly {
  display: flex;
  padding-top: 20px;
  &__firstlyipt {
    width: 300px;
  }
  &__ipt-name {
    font-size: 14px;
    color: #606266;
  }
}
</style>
