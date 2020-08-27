<template>
  <div class="box">
    <van-nav-bar
      title="修改手机号"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-field
      name="新手机号"
      label="新手机号"
      class="info"
      v-model="username"
      :rules="[{ required: true, message: '请填写手机号' }]"
    />
    <van-field
      name="密码"
      label="密码"
      v-model="username"
      :rules="[{ required: true, message: '请验证密码' }]"
    />
  </div>
</template>

<script>
  export default {
    name: 'phone',
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
</style>
