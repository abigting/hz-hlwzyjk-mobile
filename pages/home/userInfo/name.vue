<template>
  <div class="box">
    <van-nav-bar
      title="修改姓名"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-field
      class="info"
      v-model="username"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
  </div>
</template>

<script>
  export default {
    name: 'name',
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
