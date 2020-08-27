<template>
  <div class="user-info">
    <van-nav-bar
      title="用户信息"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="address">
      湖州市|监督员
    </div>
    <div>
      <van-cell is-link @click="jump('name')">
        姓名
      </van-cell>
      <van-cell is-link @click="jump('phone')">
        手机号
      </van-cell>
      <van-cell is-link @click="jump('password')">
        密码
      </van-cell>
    </div>
    <div  class="logout">
      退出登录
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
      onClickLeft(){
        this.$router.go(-1)
      },
      jump(type){
        this.$router.push(`/home/userInfo/${type}`)
      }
    },
  }
</script>

<style scoped lang="less">
  .title{
    font-size: 18px;
    font-weight:600;
    padding: 10px;
    background: #ffffff;
    text-align: center;
    color: #2E2F31;
  }
  .user-info{
    background: #F3F5F9;
    color:rgba(150,152,159,1);
    height: 100vh;
    .address{
      padding: 6px 12px;
    }
  }
  .logout{
    width: 100%;
    background: #ffffff;
    margin-top: 10px;
    text-align: center;
    padding: 14px 0;
    color: #F5222D;
    background:rgba(255,255,255,1);
  }
</style>
