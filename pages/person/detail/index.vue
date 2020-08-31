<template>
  <div class="com-box">
    <van-search
      v-model="value"
      shape="round"
      placeholder="输入姓名或证件号"
    />
    <div class="detail-box">
      <div class="info">
        <p>姓名1</p>
        <p>男 43岁 某某单位</p>
        <p>危害因素：苯、二甲苯、噪声、苯、二甲苯、噪声苯、二甲苯、噪声。</p>
      </div>
      <div class="history">
        <p class="subtitle">历史记录</p>
        <van-tabs v-model="active" @change="changeTab">
          <van-tab v-for="item in tabList" :title="item.text" :key="item.id">
            <div class="health-check" v-if="active===0">
              <van-cell v-for="item in list" :key="item.id">
                <template #title>
                  <p><span class="custom-title">{{item.type}} </span><span class="time">{{item.time}}</span></p>
                  <p class="custom-title">{{item.result}}</p>
                </template>
              </van-cell>
            </div>
            <div class="diagnose" v-if="active===1">
              <van-cell v-for="item in list" :key="item.id">
                <template #title>
                  <p><span class="custom-title">{{item.type}} | <span
                    class="blue-word">{{item.type}} </span> </span><span class="time">{{item.time}}</span>
                  </p>
                  <p class="custom-title">{{item.result}}</p>
                </template>
              </van-cell>
            </div>
            <div class="diagnose" v-if="active===2">
              <van-cell v-for="item in list" :key="item.id">
                <template #title>
                  <p><span class="custom-title">{{item.type}} | <span
                    class="blue-word">{{item.type}} </span> </span><span class="time">{{item.time}}</span>
                  </p>
                  <p class="custom-title">{{item.result}}</p>
                </template>
              </van-cell>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'name',
    data () {
      return {
        active: 0,
        tabList: [
          {
            id: 0,
            text: '体检'
          },
          {
            id: 1,
            text: '诊断'
          },
          {
            id: 2,
            text: '鉴定'
          }
        ],
        list: [
          {
            id: 0,
            type: '体检类别',
            time: '2020-08-05',
            result: '体检结论：吴兴区金盖山路56号某某大酒店后…'
          },
          {
            id: 1,
            type: '体检类别',
            time: '2020-08-05',
            result: '体检结论：吴兴区金盖山路56号某某大酒店后…'
          },
          {
            id: 2,
            type: '体检类别',
            time: '2020-08-05',
            result: '体检结论：吴兴区金盖山路56号某某大酒店后…'
          }
        ]
      }
    },
    methods: {
      onSubmit (values) {
        console.log('submit', values)
      },
      onClickLeft () {
        this.$router.go(-1)
      },
      onClickRight () {

      },
      changeTab (value) {
        this.active = value
      }
    },
  }
</script>

<style scoped lang="less">

  .subtitle {
    font-size: 16px;
    font-weight: 600;
    color: #1F2022;
    margin: 12px 0;
  }

  .detail-box {
    background: #ffffff;
    padding: 12px;
  }

  .info {
    margin-top: 10px;

  }

  .time {
    color: #61646A;
    float: right;
  }

  .blue-word {
    color: #1875E8;
  }

</style>
