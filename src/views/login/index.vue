<template>
  <div class="login">
    <div class="wrap">
      <ul class="tab">
        <li
          :class="['tab__item', { tab__active: tabIsActive === tabs.id }]"
          v-for="tabs in tabData"
          :key="tabs.id"
          @click="toggleMneu(tabs.id)"
        >
          {{ tabs.text }}
        </li>
      </ul>
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        size="medium"
        class="form"
      >
        <!-- 邮箱 -->
        <el-form-item prop="mailbox" class="form-item">
          <label class="form-item__label">邮箱</label>
          <el-input
            type="text"
            v-model="ruleForm.mailbox"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password" class="form-item">
          <label class="form-item__label">密码</label>
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item prop="checkPass" class="form-item" v-show="isCheckPass">
          <label class="form-item__label">确认密码</label>
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code" class="form-item">
          <label class="form-item__label">验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model.number="ruleForm.code"></el-input
            ></el-col>
            <el-col :span="9"
              ><el-button
                type="success"
                :disabled="getCodeStatus"
                @click="getCode"
                class="code"
                >{{ getCodeStatus ? "发送中..." : "发送验证码" }}</el-button
              ></el-col
            >
          </el-row>
        </el-form-item>
        <!-- 提交按钮 -->
        <el-form-item>
          <el-button
            type="danger"
            @click="submitForm('loginForm')"
            class="submit"
            :disabled="sendBtn"
            >{{ isCheckPass ? "注册" : "登录" }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import API from "@/api/modules/login";
export default {
  name: "login",
  data() {
    // 表单
    // 邮箱
    let valMailbox = (rule, value, callback) => {
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确的邮箱"));
      } else {
        callback();
      }
    };
    // 密码
    let password = (rule, value, callback) => {
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("输入数字加字母的密码!"));
      } else {
        callback();
      }
    };
    // 确认密码
    let checkPass = (rule, value, callback) => {
      if (!this.isCheckPass) {
        callback();
      }
      if (value === "") {
        callback(new Error("请输入确认密码"));
      } else if (value === this.ruleForm.password) {
        callback();
      } else {
        callback(new Error("请正确输入确认密码"));
      }
    };
    // 验证码
    let code = (rule, value, callback) => {
      let reg = /^\d{6}$/;
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else if (reg.test(value)) {
        return callback(new Error("请填写正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      // tab
      tabIsActive: 1,
      tabData: [
        {
          id: 1,
          text: "登录",
          type: "login"
        },
        {
          id: 2,
          text: "注册",
          type: "register"
        }
      ],
      // 表单
      ruleForm: {
        // 邮箱
        mailbox: "",
        // 密码
        password: "",
        // 确认密码
        checkPass: "",
        // 验证码
        code: ""
      },
      rules: {
        mailbox: [{ validator: valMailbox, trigger: "blur" }],
        password: [{ validator: password, trigger: "blur" }],
        checkPass: [{ validator: checkPass, trigger: "blur" }],
        code: [{ validator: code, trigger: "blur" }]
      },
      // 确认密码显隐
      isCheckPass: false,
      // 验证码按钮是否禁用 和 文字变化
      getCodeStatus: false,
      // 注册 或 登入按钮是否禁用
      sendBtn: true
    };
  },
  created() {},
  methods: {
    // 获取验证码
    getCode() {
      this.getCodeStatus = true;
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      // 邮箱为空  或 输入不正确的字符 不发送 Axios
      if (this.ruleForm.mailbox === "") {
        this.$message({
          showClose: true,
          message: "邮箱不能为空",
          type: "error"
        });
        this.getCodeStatus = false;
        return false;
      } else if (!reg.test(this.ruleForm.mailbox)) {
        this.$message({
          showClose: true,
          message: "请输入正确的邮箱",
          type: "error"
        });
        this.getCodeStatus = false;
        return false;
      }
      API.getCode({
        username: this.ruleForm.mailbox,
        // 如果是注册页面 module 的参数为 register
        // 如果是登录页面 module 的参数为 login
        module: this.isCheckPass ? "register" : "login"
      })
        .then(res => {
          this.getCodeStatus = false;
          this.sendBtn = false;
          console.log(res);
        })
        .catch(err => {
          this.getCodeStatus = false;
          console.log(err);
        });
    },
    // 切换登录页
    toggleMneu(id) {
      this.tabIsActive = id;
      if (id === 1) {
        this.isCheckPass = false;
      } else {
        this.isCheckPass = true;
      }
      this.$refs.loginForm.resetFields();
    },
    // 提交按钮
    submitForm(loginForm) {
      console.log(this.$refs[loginForm].validate);
      // 判断表单里是否填写了内容， 填写了为 true 否则 false
      this.$refs[loginForm].validate(valid => {
        if (valid && this.isCheckPass) {
          // 调取注册接口
          API.getRegister({
            username: this.ruleForm.mailbox,
            password: this.ruleForm.mailbox,
            code: this.ruleForm.code
          })
            .then(res => {
              this.tabIsActive = 2;
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          API.getLogin({
            username: this.ruleForm.mailbox,
            password: this.ruleForm.mailbox,
            code: this.ruleForm.code
          })
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  width: 100%;
  background-color: #344a5f;
}
.wrap {
  width: 330px;
  margin: auto;
}
.tab {
  text-align: center;
  &__item {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #ffffff;
    border-radius: 2px;
    cursor: pointer;
  }
  &__active {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
// 表单
.form {
  margin-top: 20px;
}
.form-item {
  margin-top: 12px;
  &__label {
    color: #fff;
  }
}
.code {
  width: 100%;
  font-size: 10px;
  color: #fff;
}
.submit {
  width: 100%;
  margin-top: 40px;
  color: #fff;
}
</style>
