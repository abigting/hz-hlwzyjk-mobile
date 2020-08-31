<template>
  <div class="com-box">
    <van-nav-bar
      title="统计"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <van-cell is-link @click="jump('name')">
        申报信息统计
      </van-cell>
      <van-cell is-link @click="jump('phone')">
        检测信息统计
      </van-cell>
      <van-cell is-link @click="jump('password')">
        体检信息统计
      </van-cell>
      <van-cell is-link @click="jump('password')">
        诊断鉴定统计
      </van-cell>
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
        this.$router.push(`/statistics/detail`)
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
</style>
