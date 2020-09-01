<template>
  <div class="com-box">
    <van-nav-bar
      title="搜企业"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-search
      v-model="value"
      shape="round"
      placeholder="输入姓名或证件号"
    />
    <div>
      <van-cell v-for="item in list" :key="item.id"  is-link url="/company/detail" >
        <template #title>
          <span class="custom-name">{{item.name}}</span>
          <span class="custom-sex">{{item.sex}}</span>
          <span class="custom-phone">{{item.phone}}</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'name',
    data() {
      return {
        value:'',
        list:[
          {
            id:1,
            name:'姓名1',
            sex:'男',
            phone:'320118677398120998'
          },
          {
            id:2,
            name:'姓名1',
            sex:'女',
            phone:'320118677398120998'
          },
          {
            id:3,
            name:'姓名1',
            sex:'男',
            phone:'320118677398120998'
          }
        ]
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
  .custom-name{

  }
  .custom-sex{
    margin:  0 24px;
  }
</style>
