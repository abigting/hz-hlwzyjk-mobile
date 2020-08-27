<template>
  <div class="login-content">
    <div class="title">
      <p>您好，欢迎来到</p>
      <p>湖州职业健康智慧管理平台</p>
    </div>
    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" class="submit-btn">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
    },
  }
</script>

<style scoped lang="less">
  .login-content{
    width: 342px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .submit-btn{
    margin-top: 50px;
    width: 100%;
    background:linear-gradient(90deg,rgba(79,184,252,1) 0%,rgba(72,146,253,1) 100%);
  }
  .login-form{
    margin-top: 50px;
  }
  .title{
    font-weight:600;
    font-size:22px;
    padding: 0 16px;
    >p{
      margin-bottom: 8px;
    }
  }
</style>
