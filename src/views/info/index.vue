<template>
  <div>
    <!-- 头部 -->
    <section>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="4">
            <el-form-item label="类型" prop="region" label-width="52px">
              <el-select v-model="ruleForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <label class="datas">日期</label
            ><el-time-picker
              is-range
              v-model="value1"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围"
            >
            </el-time-picker
          ></el-col>
          <el-col :span="9">
            <el-form-item
              label="关键字"
              prop="search"
              label-width="66px"
              class="search"
              :inline="true"
            >
              <el-select v-model="ruleForm.search" placeholder="ID">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>

              <div class="fliter">
                <el-input
                  v-model="fliter"
                  placeholder="请输入内容"
                  class="fliter-ipt"
                ></el-input>
                <el-button class="danger" type="danger" size="small"
                  >搜索</el-button
                >
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="4" class="add">
            <el-button
              class="addbtn"
              type="success"
              size="small"
              @click="adds()"
              >添加</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </section>
    <!-- 内容 -->
    <section class="content">
      <el-table
        :border="true"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @select="selects"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="标题" prop="headline"></el-table-column>
        <el-table-column prop="type" label="类别" width="130">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="120">
        </el-table-column>
        <el-table-column prop="name" label="管理人" width="116">
        </el-table-column>
        <el-table-column label="操作" width="146"
          ><template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              class="operation"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
            <el-button
              size="mini"
              type="success"
              class="operation"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="content-botton">
        <el-button @click="batchDelect()">批量删除</el-button>
        <el-pagination
          class="paging"
          background
          layout="prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "infoIndex",
  data() {
    return {
      ruleForm: {
        region: ""
      },
      rules: {
        region: [{ message: "请选择", trigger: "change" }],
        search: [{ message: "ID", trigger: "search" }]
      },
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      fliter: "",
      // 内容区域
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          type: "国内信息",
          headline: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          type: "国内信息",
          headline: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          type: "国内信息",
          headline: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          type: "国内信息",
          headline: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          type: "国内信息",
          headline: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          type: "国内信息",
          headline: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          type: "国内信息",
          headline: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    // 选择
    selects(val) {
      console.log(val);
    },
    // 添加
    adds() {
      alert("add");
    },
    // 批量删除
    batchDelect() {
      this.warnBox({
        promptText: "此操作将永久删除这些信息, 是否继续?",
        confirmHint: "删除成功!",
        abolishHint: "已取消删除"
      });
    },
    // 全选 或 反选
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 单条编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 单条删除
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 封装弹框
    warnBox(warn) {
      this.$confirm(warn.promptText, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: warn.confirmHint
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: warn.abolishHint
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.datas {
  padding-right: 10px;
  font-size: 14px;
  color: #666;
}
.el-date-editor--timerange.el-input__inner {
  width: 86%;
}
.el-form-item__content {
  width: 100%;
}
.search {
  width: 160px;
  position: relative;
}
.fliter {
  position: absolute;
  left: 100px;
  top: 0;
  width: 220px;
}
.fliter-ipt {
  width: 90%;
}
.danger {
  position: absolute;
  left: 210px;
  color: #fff;
}
.add {
  position: relative;
  right: 0;
}
.addbtn {
  position: absolute;
  right: 10px;
  font-size: 14px;
  color: #fff;
}
// 内容区域
.content {
  padding-top: 30px;
}
.operation {
  font-size: 12px;
  color: #fff;
}
.content-botton {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.paging {
  align-self: center;
}
</style>
