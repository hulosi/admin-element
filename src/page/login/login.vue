<style lang="scss" rel="stylesheet/scss" module>
.page {
  height: 100vh;
  background-position: 0 0;
  background-color: #ebeff3;
  background-image: url('./login-bg.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 0 20px;
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  .logo {
    text-decoration: none;
    color: #000;
    .image {
      display: inline-block;
      margin: 12px 10px 12px 0;
      vertical-align: top;
      width: 24px;
      height: 24px;
    }
    .text {
      display: inline-block;
      vertical-align: top;
      font-size: 16px;
    }
  }
  .navbar {
    position: absolute;
    top: 0;
    right: 20px;
    height: 48px;
  }
}

.body {
  padding-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.formBox {
  width: 320px;
  margin-top: -60px;
}

.title {
  display: block;
  margin-bottom: 40px;
  width: 320px;
  font-size: 22px;
  line-height: 1.5;
  text-align: center;
  color: $_text40Color;
}

.footer {
  width: 100%;
  position: fixed;
  z-index: 1;
  bottom: 16px;
  left: 0;
  text-align: center;
  font-size: 12px;
  padding: 16px;
  a {
    text-decoration: none;
    color: $_text10Color;
  }
}
</style>
<template>
  <cd-page :class="$style.page">
    <header :class="$style.header">
      <a :class="$style.logo">
        <img :class="$style.image"
          src="./logo.png"
          alt="logo">
        <span :class="$style.text">CBMP 易捷云核心新业务管控平台</span>
      </a>
      <div :class="$style.navbar">
        <a href="">注册</a>
      </div>
    </header>
    <section :class="$style.body">
      <el-form ref="form"
        :class="$style.formBox"
        :model="model"
        :rules="rules"
        @submit.native.prevent="submit">
        <p :class="$style.title">登录</p>
        <el-form-item prop="username">
          <el-input v-model="model.username"
            placeholder="账号"
            size="medium"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="model.password"
            placeholder="密码"
            type="password"
            size="medium"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item>
              <el-checkbox v-model="model.savePsw"></el-checkbox>
              &nbsp;&nbsp;记住密码
            </el-form-item>
          </el-col>
          <el-col :span="12"
            style="text-align: right">
            <el-form-item>
              <a>注册</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a>忘记密码</a>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <cd-button type="primary"
            native-type="submit"
            long
            size="medium">登录</cd-button>
        </el-row>
      </el-form>
      <footer :class="$style.footer">
        <a href="http://www.miitbeian.gov.cn/"
          target="_blank">沪ICP备14039535号-14</a>
        &nbsp;&nbsp; Copyright&copy;2018 深圳易捷云科技有限公司
      </footer>
    </section>
  </cd-page>
</template>
<script>
import {
  CdPage,
  CdPanel,
} from '@candy/ui/component';
import u from '@candy/utils';
import {
  userApi,
  menuApi,
} from 'api@';

export default {
  name: 'Login',
  components: {
    CdPage,
    CdPanel,
  },
  data() {
    const that = this;
    return {
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            validator: that.makeValidator_(async (rule, value) => {
              if (u.string.isAccount(value)) {
                return true;
              }
              throw new Error('请输入合法的账号');
            }),
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur',
          },
        ],
      },
      model: {
        username: '',
        password: '',
        savePsw: '',
      },
    };
  },
  computed: {
  },
  methods: {
    async submit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        this.$message.warn('输入信息有误');
        return;
      }

      await this.withLoading_(async () => {
        const userAuthInfo = await userApi.login(this.model);
        this.setUserAuthInfo_(userAuthInfo);
        const [userBaseInfo, menuList] = await Promise.all([
          userApi.getCurrentUser(),
          menuApi.getRoleMenus(),
        ]);
        this.setUserBaseInfo_(userBaseInfo);
        this.setMenuList_(menuList);
      });
      this.push_('/');
    },
  },
  created() {
  },
};
</script>
