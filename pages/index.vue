/**
* @parameter
* @description 登录页
* @author Feng.xiuting
* @date 2020年9月1日15
*/
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
        <div class="check-code">
          <van-field
            v-model="imageCode"
            placeholder="请输入验证码"
          />
          <div class="img-code" @click="getCheckCode">
            <img :src="imageCodeUrl" alt="">
          </div>
        </div>

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
  import * as userService from '~/services/user'
  import * as common from '~/utils/common'
  import { Toast } from 'vant'

  export default {
    name: 'index',
    data () {
      return {
        username: '',
        password: '',
        imageCode: '',
        imageCodeUrl: ''
      }
    },
    created () {
      this.getCheckCode()
    },
    methods: {
      async onSubmit () {
        if (!this.username) {
          Toast('请填写用户名')
          return
        }
        if (!this.password) {
          Toast('请填写密码')
          return
        }
        if (!this.imageCode) {
          Toast('请填写验证码')
          return
        }
        const res = await userService.login({
          username: this.username,
          password: this.password,
          imageCode: this.imageCode,
          uuid: this.uuid
        })
        if (res) {
          const { userInfo, token } = res
          this.$router.push('/home')
          common.setCookie('userInfo', userInfo)
          common.setCookie('token', token)
        }
      },
      async getCheckCode () {
        const res = await userService.createCode()
        if (res) {
          const { uuid, imageBase64 } = res
          this.imageCodeUrl = imageBase64
          this.uuid = uuid
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .login-content {
    width: 342px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .submit-btn {
    margin-top: 50px;
    width: 100%;
    background: linear-gradient(90deg, rgba(79, 184, 252, 1) 0%, rgba(72, 146, 253, 1) 100%);
  }

  .login-form {
    margin-top: 50px;
  }

  .welcome {
    font-weight: 600;
    font-size: 22px;
    padding: 0 16px;

    > p {
      margin-bottom: 8px;
    }
  }

  .check-code {
    position: relative;
  }

  .img-code {
    position: absolute;
    border: 1px solid #ebedf0;
    vertical-align: middle;
    top: 0;
    right: 0;

    > img {
      width: 90px;
      height: 38px;
    }
  }
</style>
