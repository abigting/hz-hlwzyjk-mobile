<template>
  <div class="login-content">
    <div class="welcome">
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
<!--        <van-field-->
<!--          v-model="imageCode"-->
<!--          placeholder="请输入验证码"-->
<!--        />-->
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
  import * as userService from '../../services/user';
  import { Toast } from 'vant';
  export default {
    name: 'index',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async onSubmit() {
        if(!this.username){
          Toast('请填写用户名');
          return
        }
        if(!this.password){
          Toast('请填写密码');
          return
        }
        if(!this.imageCode){
          Toast('请填写验证码');
          return
        }
        const res = await userService.login({username:this.username, password: this.password})
        if(res){

        }
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
  .welcome{
    font-weight:600;
    font-size:22px;
    padding: 0 16px;
    >p{
      margin-bottom: 8px;
    }
  }
</style>
