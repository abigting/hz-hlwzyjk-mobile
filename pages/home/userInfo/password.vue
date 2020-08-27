<template>
  <div class="box">
    <van-nav-bar
      title="修改密码"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-field
      name="原密码"
      label="原密码"
      class="info"
      v-model="username"
      :rules="[{ required: true, message: '输入原密码' }]"
    />
    <van-field
      name="新密码"
      label="新密码"
      v-model="username"
      :rules="[{ required: true, message: '输入新密码' }]"
    />
    <van-field
      name="确认密码"
      label="确认密码"
      v-model="username"
      :rules="[{ required: true, message: '再次输入新密码' }]"
    />
    <p class="reminder">密码6-20个字符，包含数字和字母</p>
  </div>
</template>

<script>
  export default {
    name: 'password',
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
      onClickRight(){

      }
    },
  }
</script>

<style scoped lang="less">
  .box{
    background: #F3F5F9;
    height: 100vh;
  }
  .info{
    margin-top: 10px;
  }
  .reminder{
    font-size: 12px;
    color:rgba(110,115,125,1);
    padding: 12px;
  }
</style>
